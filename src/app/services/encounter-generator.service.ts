import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { crInfo } from '../data/cr-info';
import { encounterTemplates } from '../data/encounter-templates';
import { metaInfo } from '../data/meta-info';
import { playerLevelsToDifficulty } from '../data/player-levels-to-encounter-difficulty';
import { EncounterDifficulties } from '../enums/encounter-difficulties';
import { Encounter, EncounterMonsterInfo } from '../models/encounter';
import { EncounterRequest } from '../models/encounter-request';
import { Monster } from '../models/monster';
import { MonsterFilters } from '../models/monster-filters';
import { MonsterDataService } from '../monster-data.service';
import { MonsterFilterService } from './monster-filter.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class EncounterGeneratorService {

  private _previousEncounters: Encounter[] = [];
  private _previousEncounters$ = new BehaviorSubject(this._previousEncounters);
  private readonly maxPreviousEncountersLength = 20;
  private readonly templates = encounterTemplates;
  private previous5ChosenTemplates: number[][] = [];

  public readonly previousEncounters$ = this._previousEncounters$.asObservable();

  constructor(
    private monsterData: MonsterDataService,
    private monsterFilter: MonsterFilterService,
    private storage: StorageService
  ) {
    const previouslyGeneratedEncounters = storage.getPreviouslyGeneratedEncounters();
    if (previouslyGeneratedEncounters && previouslyGeneratedEncounters.length) {
      this._previousEncounters = previouslyGeneratedEncounters;
      this._previousEncounters$.next(this._previousEncounters);
    }

    console.log(this.templates);
  }

  public async generateEncounter(encounterRequest: EncounterRequest, filters: MonsterFilters): Promise<Encounter> {
    const expTarget = this.getTotalExpTarget(encounterRequest);
    const multiplier = 1;//this.getDifficultyDivisor(encounterRequest.numberOfPlayers, encounterRequest.maxNumberOfEnemies);
    const crInfoValues = Object.values(crInfo);

    const possibleTemplates = this.templates
      .filter((t) => {
        if (this.previous5ChosenTemplates.some(t2 => this.areArraysEqual(t, t2))) {
          return false;
        }
        const sum = t.reduce((a, b) => a + b, 0);
        return sum <= encounterRequest.maxNumberOfEnemies;
      });
    console.log('possible templates', possibleTemplates.slice());
    const possibleEncounters$ = possibleTemplates.map(template => {
      return new Promise<Encounter>((resolve, _reject) => {
        let monster: Monster,
          encounters: EncounterMonsterInfo[] = [],
          currentGroup: number,
          targetExp: number;
        const groups: number[] = template.slice();
        while (groups[0]) {
          let availableExp = expTarget / multiplier;
          // Exp should be shared as equally as possible between groups
          targetExp = availableExp / groups.length * this.getFudgeAmount(encounterRequest.difficulty);
          currentGroup = groups.shift()!;

          // We need to find a monster who, in the correct number, is close to the target exp
          targetExp /= currentGroup;

          monster = this.getBestMonster(targetExp, filters);

          encounters.push({
            monster: monster,
            quantity: currentGroup,
          });

          // Finally, subtract the actual exp value
          const exp = crInfoValues.find(ci => ci.numeric === monster.cr)?.exp;
          availableExp -= currentGroup * exp!;
        }

        resolve(new Encounter(encounters, { ...encounterRequest }, template));
      });
    });

    const possibleEncounters = await Promise.all(possibleEncounters$);

    const newEncounter = possibleEncounters.reduce((a, b) => {
      let aDiff = Math.abs(a.getTotalApproximateExp() - expTarget);
      let bDiff = Math.abs(b.getTotalApproximateExp() - expTarget);

      if (aDiff == bDiff) {
        // Choose largest vs smallest (> vs <)
        return a > b ? a : b;
      } else {
        return bDiff < aDiff ? b : a;
      }
    });

    this.previous5ChosenTemplates.unshift(newEncounter.template.slice());
    if (this.previous5ChosenTemplates.length > 5) {
      this.previous5ChosenTemplates.pop();
    }

    possibleEncounters.forEach(encounter => {
      console.log('Possible Encounter', encounter, encounter.getTotalApproximateExp());
    });
    console.log('Chosen Encounter', newEncounter, newEncounter.getTotalApproximateExp());
    console.log('Exp target', expTarget);

    const blahs = possibleEncounters.filter(x => x.encounters.reduce((a, b) => a + b.quantity, 0) > 32).slice();
    console.log('blahs', blahs);

    this.updateEncounters(newEncounter);
    return newEncounter;
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
      const totalExp = difficultyExpInfo[encounterRequest.difficulty] * encounterRequest.numberOfPlayers;

      return totalExp * this.getFudgeAmount(encounterRequest.difficulty);
    }

    throw new Error('Could not get total exp target');
  }

  private getFudgeAmount(difficulty: EncounterDifficulties) {
    switch (difficulty) {
      case EncounterDifficulties.Easy:
        return 1.0;
      case EncounterDifficulties.Medium:
      case EncounterDifficulties.Hard:
        return 1.1
      case EncounterDifficulties.Deadly:
        return 1.2
      case EncounterDifficulties.NineHells:
        return 1.3
    }
  }

  private getEncounterTemplate(maxMonsters: number): { total: number; groups: number[]; } {
    let templates = [
      [1],
      [1, 1],
      [1, 2],
      [1, 5],
      [1, 1, 1],
      [1, 1, 2],
      [1, 2, 3],
      [2, 2],
      [3, 3],
      [2, 4],
      [2, 2, 2, 2],
      [2, 2, 4],
      [8],
    ];
    if (maxMonsters) {
      templates = templates.filter((t) => {
        const sum = t.reduce((a, b) => a + b);
        return sum <= maxMonsters;
      });
    }
    const groups: number[] = templates[Math.floor(Math.random() * templates.length)].slice();
    const total = groups.reduce((g1, g2) => g1 + g2);

    return {
      total,
      groups
    };
  }

  private getDifficultyDivisor(playerCount: number, monsterCount: number): number {
    var multiplierCategory,
      multipliers = [
        0.5,
        1,
        1.5,
        2,
        2.25,
        2.75,
        3.33,
        4,
      ];

    if (monsterCount === 0) {
      return 0;
    } else if (monsterCount === 1) {
      multiplierCategory = 1;
    } else if (monsterCount === 3) {
      multiplierCategory = 2;
    } else if (monsterCount < 10) {
      multiplierCategory = 3;
    } else if (monsterCount < 14) {
      multiplierCategory = 4;
    } else if (monsterCount < 18) {
      multiplierCategory = 5;
    } else {
      multiplierCategory = 6;
    }

    if (playerCount < 3) {
      // Increase multiplier for parties of one and two
      multiplierCategory++;
    } else if (playerCount > 5 && multiplierCategory > 1) {
      // Decrease multiplier for parties of six through eight
      multiplierCategory--;
    }

    return multipliers[multiplierCategory];
  }

  private getBestMonster(targetExp: number, filters: MonsterFilters) {
    let bestBelow = 0,
      bestAbove = metaInfo.crList.length - 1,
      crIndex: number,
      step = -1;

    for (let i = 1; i < metaInfo.crList.length; i++) {
      if (metaInfo.crList[i].exp < targetExp) {
        bestBelow = i;
      } else {
        bestAbove = i;
        break;
      }
    }

    if ((targetExp - metaInfo.crList[bestBelow].exp) < (metaInfo.crList[bestAbove].exp - targetExp)) {
      crIndex = bestBelow;
    } else {
      crIndex = bestAbove;
    }

    let currentIndex = crIndex;
    let monsterList = this.getShuffledMonsterList(metaInfo.crList[crIndex].numeric);

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
        monsterList = this.getShuffledMonsterList(metaInfo.crList[currentIndex].numeric);
      }
    }
  }

  private getShuffledMonsterList(cr: number) {
    const list = this.getMonstersByCr(cr).slice();

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

  private getMonstersByCr(cr: number): Monster[] {
    return this.monsterData.getAllMonsters().filter(m => m.cr === cr);
  }

  private areArraysEqual(a: any[], b: any[]): boolean {
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
  }
}
