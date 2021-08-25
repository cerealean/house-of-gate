import { Component, Input } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { playerLevelsToDifficulty } from '../data/player-levels-to-encounter-difficulty';
import { EncounterDifficulties } from '../enums/encounter-difficulties';
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
export class EncounterGeneratorComponent {

  public readonly EncounterDifficulties = EncounterDifficulties;

  @Input() public filters!: MonsterFilters;

  encounterRequest: EncounterRequest = {
    level: 5,
    maxNumberOfEnemies: 6,
    numberOfPlayers: 4,
    difficulty: EncounterDifficulties.Medium
  };
  monsters: Monster[] = [];

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

  openPreviousEncounters(): void {
    this.matBottomSheet.open(PreviousEncountersComponent);
  }

  generateRandomEncounter() {
    const encounter = this.encounterGenerator.generateEncounter(this.encounterRequest, this.filters);
    const monsters = encounter.encounters.map(e => {
      const monsters: Monster[] = [];
      for(let index = 0; index < e.quantity; index++) {
        monsters.push(e.monster);
      }

      return monsters;
    }).reduce((acc, val) => acc.concat(val), []);
    this.monsters = monsters;
  }

}
