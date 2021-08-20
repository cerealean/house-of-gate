import { Component, Input } from '@angular/core';
import { EncounterDifficulties } from '../enums/encounter-difficulties';
import { EncounterRequest } from '../models/encounter-request';
import { Monster } from '../models/monster';
import { MonsterFilters } from '../models/monster-filters';
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

  constructor(
    private encounterGenerator: EncounterGeneratorService
  ) { }

  generateRandomEncounter() {
    const encounter = this.encounterGenerator.generateEncounter(this.encounterRequest, this.filters);
    const monsters = encounter.map(e => {
      const monsters: Monster[] = [];
      for(let index = 0; index < e.quantity; index++) {
        monsters.push(e.monster);
      }

      return monsters;
    }).reduce((acc, val) => acc.concat(val), []);
    this.monsters = monsters;
  }

}
