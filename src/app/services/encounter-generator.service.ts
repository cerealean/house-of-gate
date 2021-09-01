import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { encounterTemplates } from '../data/encounter-templates';
import { playerLevelsToDifficulty } from '../data/player-levels-to-encounter-difficulty';
import { EncounterDifficulties } from '../enums/encounter-difficulties';
import { Encounter, EncounterMonsterInfo } from '../models/encounter';
import { EncounterRequest } from '../models/encounter-request';
import { Monster } from '../models/monster';
import { MonsterFilters } from '../models/monster-filters';
import { MonsterDataService } from '../monster-data.service';
import { MetaDataService } from './meta-data.service';
import { MonsterFilterService } from './monster-filter.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class EncounterGeneratorService {

  private _previousEncounters: Encounter[] = [];
  private readonly _previousEncounters$ = new BehaviorSubject(this._previousEncounters);
  private readonly maxPreviousEncountersLength = 20;
  private readonly templates = encounterTemplates;
  private readonly previous5ChosenTemplates: number[][] = [];

  public readonly previousEncounters$ = this._previousEncounters$.asObservable();

  constructor(
    private monsterData: MonsterDataService,
    private monsterFilter: MonsterFilterService,
    private storage: StorageService,
    private metaData: MetaDataService
  ) {
    const previouslyGeneratedEncounters = storage.getPreviouslyGeneratedEncounters();
    if (previouslyGeneratedEncounters && previouslyGeneratedEncounters.length) {
      this._previousEncounters = previouslyGeneratedEncounters;
      this._previousEncounters$.next(this._previousEncounters);
    }
  }

  public async generateEncounter(encounterRequest: EncounterRequest, filters: MonsterFilters): Promise<Encounter> {
    const expTarget = this.getTotalExpTarget(encounterRequest);
    const possibleTemplates = this.getTemplatesToUse(encounterRequest);
    const possibleEncounters$ = possibleTemplates.map(template => {
      return new Promise<Encounter>(async (resolve, _reject) => {
        let monster: Monster,
          encounters: EncounterMonsterInfo[] = [],
          currentGroup: number,
          targetExp: number;
        const groups: number[] = template.slice();
        while (groups[0]) {
          let availableExp = expTarget;
          // Exp should be shared as equally as possible between groups
          targetExp = availableExp / groups.length;
          currentGroup = groups.shift()!;

          // We need to find a monster who, in the correct number, is close to the target exp
          targetExp /= currentGroup;

          monster = await this.getBestMonster(targetExp, filters);

          encounters.push({
            monster: monster,
            quantity: currentGroup,
          });

          // Finally, subtract the actual exp value
          const exp = this.metaData.getCrInfoByCr(monster.cr)?.exp;
          availableExp -= currentGroup * exp!;
        }

        resolve(new Encounter(encounters, { ...encounterRequest }, template));
      });
    });

    const possibleEncounters = await Promise.all(possibleEncounters$);

    const newEncounter = this.findEncounterClosestToTargetExp(possibleEncounters, expTarget);

    this.addPreviouslyChosenTemplate(newEncounter);
    this.updateEncounters(newEncounter);
    return newEncounter;
  }

  private findEncounterClosestToTargetExp(possibleEncounters: Encounter[], expTarget: number) {
    return possibleEncounters.reduce((currentClosestEncounter, nextEncounterToTest) => {
      const currentExp = currentClosestEncounter.getTotalApproximateExp();
      const beingTestedExp = nextEncounterToTest.getTotalApproximateExp();
      let aDiff = Math.abs(currentExp - expTarget);
      let bDiff = Math.abs(beingTestedExp - expTarget);

      if (aDiff == bDiff) {
        // Choose largest vs smallest (> vs <)
        return currentExp > beingTestedExp ? currentClosestEncounter : nextEncounterToTest;
      } else {
        return bDiff < aDiff ? nextEncounterToTest : currentClosestEncounter;
      }
    });
  }

  private addPreviouslyChosenTemplate(newEncounter: Encounter) {
    this.previous5ChosenTemplates.unshift(newEncounter.template.slice());
    if (this.previous5ChosenTemplates.length > 5) {
      this.previous5ChosenTemplates.pop();
    }
  }

  private getTemplatesToUse(encounterRequest: EncounterRequest) {
    const templatesReducedForMaxEnemies = this.templates
      .filter((t) => {
        const sum = t.reduce((a, b) => a + b, 0);
        return sum <= encounterRequest.maxNumberOfEnemies;
      });
    const nonDuplicateTemplates = templatesReducedForMaxEnemies
      .filter(t => !this.previous5ChosenTemplates.some(t2 => this.areArraysEqual(t, t2)));
    const possibleTemplates = nonDuplicateTemplates.length > 0
      ? nonDuplicateTemplates
      : templatesReducedForMaxEnemies;
    return possibleTemplates;
  }

  private updateEncounters(newEncounter: Encounter) {
    const newLength = this._previousEncounters.unshift(newEncounter);
    this._previousEncounters = this._previousEncounters.slice(0, Math.min(newLength, this.maxPreviousEncountersLength));
    this._previousEncounters$.next(this._previousEncounters);
    this.storage.setPreviouslyGeneratedEncounters(this._previousEncounters);
  }

  private getTotalExpTarget(encounterRequest: EncounterRequest): number {
    const difficultyExpInfo = playerLevelsToDifficulty.get(encounterRequest.level);
    if (difficultyExpInfo) {
      const category = this.getDifficultyCategory(encounterRequest.difficultyAmount);
      const totalExp = difficultyExpInfo[category] * encounterRequest.numberOfPlayers;

      return totalExp * encounterRequest.difficultyAmount;
    }

    throw new Error('Could not get total exp target');
  }

  private getDifficultyCategory(amount: number): EncounterDifficulties {
    if(amount >= 0.5 && amount < 0.75) {
      return EncounterDifficulties.Easy;
    } else if (amount >= 0.75 && amount < 0.88) {
      return EncounterDifficulties.Medium;
    } else if (amount >= 0.88 && amount < 1) {
      return EncounterDifficulties.Hard;
    } else if (amount >= 1 && amount < 1.15) {
      return EncounterDifficulties.Deadly;
    } else {
      throw new Error(`Difficulty ${amount} is out of range`);
    }
  }

  private async getBestMonster(targetExp: number, filters: MonsterFilters) {
    const crList = this.metaData.getCrList();
    let bestBelow = 0,
      bestAbove = crList.length - 1,
      crIndex: number,
      step = -1;

    for (let i = 1; i < crList.length; i++) {
      if (crList[i].exp < targetExp) {
        bestBelow = i;
      } else {
        bestAbove = i;
        break;
      }
    }

    if ((targetExp - crList[bestBelow].exp) < (crList[bestAbove].exp - targetExp)) {
      crIndex = bestBelow;
    } else {
      crIndex = bestAbove;
    }

    let currentIndex = crIndex;
    let monsterList = await this.getShuffledMonsterList(crList[crIndex].numeric);

    while (true) {
      if (this.monsterFilter.doesMonsterMatchFilter(monsterList[0], filters)) {
        return monsterList[0];
      } else {
        monsterList.shift();
      }

      // If we run through all the monsters from this level, check a different level
      if (monsterList.length === 0) {
        // there were no monsters found lower than target exp, so we have to start checking higher
        if (currentIndex === 0) {
          // Reset currentIndex
          currentIndex = crIndex;
          // Start looking up instead of down
          step = 1;
        }

        currentIndex += step;
        monsterList = await this.getShuffledMonsterList(crList[currentIndex].numeric);
      }
    }
  }

  private async getShuffledMonsterList(cr: number) {
    const monsters = await this.getMonstersByCr(cr);
    const list = monsters.slice();

    return this.shuffle(list);
  }

  private shuffle<T>(array: Array<T>) {
    let m = array.length, t, i, newArray;
    newArray = array.slice();
    while (m) {
      i = Math.floor(Math.random() * m--);

      t = newArray[m];
      newArray[m] = newArray[i];
      newArray[i] = t;
    }

    return newArray;
  }

  private async getMonstersByCr(cr: number): Promise<Monster[]> {
    const monsters$ = await this.monsterData.getAllMonsters();
    return monsters$.filter(m => m.cr === cr);
  }

  private areArraysEqual(a: any[], b: any[]): boolean {
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
  }
}
