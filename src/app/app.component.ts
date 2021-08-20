import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Monster } from './models/monster';
import { MonsterDataService } from './monster-data.service';
import { MonsterFilters } from './models/monster-filters';
import { MonsterFilterService } from './services/monster-filter.service';
import { EncounterGeneratorService } from './services/encounter-generator.service';
import { EncounterDifficulties } from './enums/encounter-difficulties';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public monsters: Monster[] = [];
  public filters!: MonsterFilters;

  constructor(
    private monsterData: MonsterDataService,
    private monsterFilter: MonsterFilterService,
    private encounterGenerator: EncounterGeneratorService ) {}

  ngOnInit() {
    this.monsters = this.monsterData.getAllMonsters()
      .sort((first, second) => {
        if(first.name > second.name) {
          return 1
        } else if (second.name > first.name) {
          return -1;
        } else {
          return 0;
        }
      });
    console.log(this.monsters);
  }

  generateEncounter() {
    const encounter = this.encounterGenerator.generateEncounter({
      difficulty: EncounterDifficulties.Deadly,
      level: 5,
      maxNumberOfEnemies: 10,
      numberOfPlayers: 4
    }, this.filters);

    console.log(encounter);
  }

  filter(filters: MonsterFilters) {
    this.filters = filters;
    this.monsters = this.monsterFilter.filterMonsters(this.monsters, this.filters);
  }
}
