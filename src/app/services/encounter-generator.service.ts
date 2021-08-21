import { Injectable } from '@angular/core';
import { crInfo } from '../data/cr-info';
import { metaInfo } from '../data/meta-info';
import { playerLevelsToDifficulty } from '../data/player-levels-to-encounter-difficulty';
import { EncounterDifficulties } from '../enums/encounter-difficulties';
import { Encounter } from '../models/encounter';
import { EncounterRequest } from '../models/encounter-request';
import { Monster } from '../models/monster';
import { MonsterFilters } from '../models/monster-filters';
import { MonsterDataService } from '../monster-data.service';
import { MonsterFilterService } from './monster-filter.service';

@Injectable({
  providedIn: 'root'
})
export class EncounterGeneratorService {

  constructor(
    private monsterData: MonsterDataService,
    private monsterFilter: MonsterFilterService
    ) { }

  public generateEncounter(encounterRequest: EncounterRequest, filters: MonsterFilters): Encounter {
    const expTarget = this.getTotalExpTarget(encounterRequest);
    const encounterTemplate = this.getEncounterTemplate(encounterRequest.maxNumberOfEnemies);
    const multiplier = this.getMultiplier(encounterRequest.numberOfPlayers, encounterRequest.maxNumberOfEnemies);
    let availableExp = expTarget / multiplier;
    let monster: Monster,
    encounter: Encounter = [],
    currentGroup: number,
    targetExp: number;

    while ( encounterTemplate.groups[0] ) {
      // Exp should be shared as equally as possible between groups
      targetExp = availableExp / encounterTemplate.groups.length;
      currentGroup = encounterTemplate.groups.shift()!;

      // We need to find a monster who, in the correct number, is close to the target exp
      targetExp /= currentGroup;

      monster = this.getBestMonster(targetExp, filters);

      encounter.push({
        monster: monster,
        quantity: currentGroup,
      });

      // Finally, subtract the actual exp value
      const exp = Object.values(crInfo).find(ci => ci.numeric === monster.cr)?.exp;
      availableExp -= currentGroup * exp!;
    }
    return encounter;
  }

  private getTotalExpTarget(encounterRequest: EncounterRequest): number {
    const difficultyExpInfo = playerLevelsToDifficulty.get(encounterRequest.level);
    if(difficultyExpInfo) {
      const totalExp = difficultyExpInfo[encounterRequest.difficulty] * encounterRequest.numberOfPlayers;

      return totalExp * this.getFudgeAmount(encounterRequest.difficulty);
    }

    throw new Error('Could not get total exp target');
  }

  private getFudgeAmount(difficulty: EncounterDifficulties) {
    switch(difficulty) {
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
      [ 1 ],
      [ 1, 1 ],
      [ 1, 2 ],
      [ 1, 5 ],
      [ 1, 1, 1 ],
      [ 1, 1, 2 ],
      [ 1, 2, 3 ],
      [ 2, 2 ],
      [ 3, 3 ],
      [ 2, 4 ],
      [ 2, 2, 2, 2 ],
      [ 2, 2, 4 ],
      [ 8 ],
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

  private getMultiplier(playerCount: number, monsterCount: number): number {
    var multiplierCategory,
      multipliers = [
        0.5,
        1,
        1.5,
        2,
        2.5,
        3,
        4,
        5,
      ];

    if ( monsterCount === 0 ) {
      return 0;
    } else if ( monsterCount === 1 ) {
      multiplierCategory = 1;
    } else if ( monsterCount === 2 ) {
      multiplierCategory = 2;
    } else if ( monsterCount < 7 ) {
      multiplierCategory = 3;
    } else if ( monsterCount < 11 ) {
      multiplierCategory = 4;
    } else if ( monsterCount < 15 ) {
      multiplierCategory = 5;
    } else {
      multiplierCategory = 6;
    }

    if ( playerCount < 3 ) {
      // Increase multiplier for parties of one and two
      multiplierCategory++;
    } else if ( playerCount > 5 ) {
      // Decrease multiplier for parties of six through eight
      multiplierCategory--;
    }

    return multipliers[multiplierCategory];
  }

  private getBestMonster(targetExp: number, filters: MonsterFilters) {
    let bestBelow = 0,
      bestAbove: number,
      crIndex: number,
      currentIndex: number,
      step = -1,
      monsterList;

    for (let i = 1; i < metaInfo.crList.length; i++ ) {
      if ( metaInfo.crList[i].exp < targetExp ) {
        bestBelow = i;
      } else {
        bestAbove = i;
        break;
      }
    }

    if ( (targetExp - metaInfo.crList[bestBelow].exp) < (metaInfo.crList[bestAbove!].exp - targetExp) ) {
      crIndex = bestBelow;
    } else {
      crIndex = bestAbove!;
    }

    currentIndex = crIndex;

    monsterList = this.getShuffledMonsterList(metaInfo.crList[crIndex].numeric);

    while ( true ) {
      if (this.monsterFilter.doesMonsterMatchFilter(monsterList[0], filters)) {
        return monsterList[0];
      } else {
        monsterList.shift();
      }

      // If we run through all the monsters from this level, check a different level
      if ( monsterList.length === 0 ) {
        // there were no monsters found lower than target exp, so we have to start checking higher
        if ( currentIndex === 0 ) {
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
    const list = this.getMonstersByCr(cr).slice(0);

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
}
