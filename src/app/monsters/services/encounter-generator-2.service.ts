import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { crToExpMap } from 'src/app/data/static/cr-to-exp';
import { StorageKeys } from 'src/app/services/storage.service';
import { GeneratedEncounter } from '../../encounters/models/encounter';
import { EncounterRequest } from '../../encounters/models/encounter-request';
import { Monster } from '../models/monster';
import { MonsterFilters } from '../models/monster-filters';
import { MonsterDataService } from '../../data/services/monsters/monster-data.service';
import { MonsterFilterService } from './monster-filter.service';

@Injectable({
  providedIn: 'any'
})
export class EncounterGenerator2Service {
  private readonly numberOfEncountersToGenerate = 10;

  constructor(
    private readonly monsterData: MonsterDataService,
    private readonly filter: MonsterFilterService
  ) {
  }

  public async generateEncounter(request: EncounterRequest, filter: MonsterFilters): Promise<GeneratedEncounter> {
    const targetExp = this.calculateTargetExp(request);
    const allMonsters = await this.monsterData.getAllMonsters();
    const filteredMonsters = this.filter.filterMonsters(allMonsters, filter);
    if (filteredMonsters.length === 0) {
      throw new Error('There are no available monsters that match user filters');
    }
    const encounters = [];
    for (let index = 0; index < this.numberOfEncountersToGenerate; index++) {
      encounters.push(this.createEncounter(filteredMonsters, targetExp, request));
    }
    const newEncounter = this.findEncounterClosestToTargetExp(encounters, targetExp);

    return newEncounter;
  }

  private calculateTargetExp(request: EncounterRequest) {
    const crToExp = crToExpMap.get(request.level)!;
    const numberOfPlayersModifier = request.numberOfPlayers * .25;
    const targetExp = crToExp * numberOfPlayersModifier * request.difficultyAmount;
    return targetExp;
  }

  private createEncounter(allMonsters: Monster[], targetExp: number, request: EncounterRequest) {
    const shuffledMonsters = this.shuffle(allMonsters);
    const monstersForEncounter: Monster[] = [];
    let currentExp = 0;

    do {
      const selectedMonster = shuffledMonsters.shift()!;
      const expForMonster = crToExpMap.get(selectedMonster.cr)!;
      const potentialExpAfterAddition = currentExp + expForMonster;
      if (potentialExpAfterAddition <= targetExp) {
        monstersForEncounter.push(selectedMonster);
        currentExp += expForMonster;
      }
    }
    while (monstersForEncounter.length < request.maxNumberOfEnemies
      && shuffledMonsters.length > 0);

    return new GeneratedEncounter(monstersForEncounter, request);
  }

  private shuffle<T>(array: T[]): T[] {
    let m = array.length, t, i;
    let newArray = array.slice();
    while (m) {
      i = Math.floor(Math.random() * m--);

      t = newArray[m];
      newArray[m] = newArray[i];
      newArray[i] = t;
    }

    return newArray;
  }

  private findEncounterClosestToTargetExp(possibleEncounters: GeneratedEncounter[], expTarget: number) {
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
}
