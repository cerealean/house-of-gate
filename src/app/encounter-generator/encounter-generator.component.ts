import { Component, Input, OnDestroy } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Subscription } from 'rxjs';
import { playerLevelsToDifficulty } from '../data/player-levels-to-encounter-difficulty';
import { EncounterDifficulties } from '../enums/encounter-difficulties';
import { EncounterMonsterInfo } from '../models/encounter';
import { EncounterRequest } from '../models/encounter-request';
import { Monster } from '../models/monster';
import { MonsterFilters } from '../models/monster-filters';
import { PreviousEncountersComponent } from '../previous-encounters/previous-encounters.component';
import { EncounterGeneratorService } from '../services/encounter-generator.service';

@Component({
  selector: 'app-encounter-generator',
  templateUrl: './encounter-generator.component.html',
  styleUrls: ['./encounter-generator.component.scss']
})
export class EncounterGeneratorComponent implements OnDestroy {

  public readonly EncounterDifficulties = EncounterDifficulties;

  @Input() public filters!: MonsterFilters;

  encounterRequest: EncounterRequest = {
    level: 5,
    maxNumberOfEnemies: 6,
    numberOfPlayers: 4,
    difficulty: EncounterDifficulties.Medium
  };
  monsters: Monster[] = [];

  private subscriptions = new Subscription();

  public get expStats() {
    const difficulty = playerLevelsToDifficulty.get(this.encounterRequest.level)!;
    const numberOfPlayers = this.encounterRequest.numberOfPlayers;
    return {
      easy: difficulty.easy * numberOfPlayers,
      medium: difficulty.medium * numberOfPlayers,
      hard: difficulty.hard * numberOfPlayers,
      deadly: difficulty.deadly * numberOfPlayers,
      ninehells: difficulty.ninehells * numberOfPlayers,
      budget: difficulty.budget * numberOfPlayers
    };
  }

  constructor(
    private encounterGenerator: EncounterGeneratorService,
    private matBottomSheet: MatBottomSheet
  ) { }

  ngOnDestroy(): void {
    this.subscriptions?.unsubscribe();
  }

  openPreviousEncounters(): void {
    const ref = this.matBottomSheet.open(PreviousEncountersComponent);
    this.subscriptions.add(
      ref.instance.previousEncounterSelected.subscribe(encounter => {
        this.encounterRequest = {...encounter.request};
        this.monsters = this.convertEncountersToMonsters(encounter.encounters.slice());
        ref.dismiss();
      })
    );
  }

  generateRandomEncounter() {
    const encounter = this.encounterGenerator.generateEncounter(this.encounterRequest, this.filters);
    const monsters = this.convertEncountersToMonsters(encounter.encounters);
    this.monsters = monsters;
  }

  private convertEncountersToMonsters(encounters: EncounterMonsterInfo[]) {
    return encounters.map(e => {
      const monsters: Monster[] = [];
      for(let index = 0; index < e.quantity; index++) {
        monsters.push(e.monster);
      }

      return monsters;
    }).reduce((acc, val) => acc.concat(val), []);
  }

}
