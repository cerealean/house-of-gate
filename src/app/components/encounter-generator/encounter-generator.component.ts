import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Subscription } from 'rxjs';
import { EncounterDifficulties } from '../../enums/encounter-difficulties';
import { EncounterMonsterInfo } from '../../models/encounter';
import { EncounterRequest } from '../../models/encounter-request';
import { Monster } from '../../models/monster';
import { MonsterFilters } from '../../models/monster-filters';
import { PreviousEncountersComponent } from '../previous-encounters/previous-encounters.component';
import { EncounterGeneratorService } from '../../services/encounter-generator.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-encounter-generator',
  templateUrl: './encounter-generator.component.html',
  styleUrls: ['./encounter-generator.component.scss']
})
export class EncounterGeneratorComponent implements OnDestroy, OnInit {

  public readonly EncounterDifficulties = EncounterDifficulties;

  @Input() public filters!: MonsterFilters;

  encounterRequest: EncounterRequest = {
    level: 5,
    maxNumberOfEnemies: 6,
    numberOfPlayers: 4,
    difficultyAmount: 0.75
  };
  monsters: Monster[] = [];

  private subscriptions = new Subscription();

  constructor(
    private encounterGenerator: EncounterGeneratorService,
    private matBottomSheet: MatBottomSheet,
    private storage: StorageService
  ) { }

  ngOnInit(): void {
    const currentEncounterRequest = this.storage.getEncounterFilters();
    if (currentEncounterRequest) {
      this.encounterRequest = currentEncounterRequest;
    }
  }

  ngOnDestroy(): void {
    this.subscriptions?.unsubscribe();
  }

  openPreviousEncounters(): void {
    const ref = this.matBottomSheet.open(PreviousEncountersComponent);
    const selected$ = ref.instance.previousEncounterSelected.subscribe(encounter => {
      this.encounterRequest = { ...encounter.request };
      this.monsters = this.convertEncountersToMonsters(encounter.encounters.slice());
      ref.dismiss();
    });
    const afterDismissed$ = ref.afterDismissed().subscribe(() => {
      selected$?.unsubscribe();
    });
    this.subscriptions.add(selected$);
    this.subscriptions.add(afterDismissed$);
  }

  async generateRandomEncounter(): Promise<void> {
    const encounter = await this.encounterGenerator.generateEncounter(this.encounterRequest, this.filters);
    const monsters = this.convertEncountersToMonsters(encounter.encounters);
    this.monsters = monsters;
  }

  updateFilters(): void {
    this.storage.setEncounterFilters(this.encounterRequest);
  }

  formatSlider(value: number): string {
    if (value >= 0.5 && value < 0.6) {
      return 'Child\'s Play';
    } else if (value >= 0.6 && value < 0.75) {
      return 'Easy';
    } else if (value >= 0.75 && value < 0.85) {
      return 'Challenging';
    } else if (value >= 0.85 && value < 0.93) {
      return 'Hard';
    } else if (value >= 0.93 && value < 0.98) {
      return 'Deadly';
    } else if (value >= 0.98 && value < 1.05) {
      return 'Nine Hells';
    } else if (value >= 1.05 && value < 1.15) {
      return 'TPK';
    } else if (value >= 1.15 && value < 1.3) {
      return 'Sadist';
    } else if (value >= 1.3 && value < 1.45) {
      return 'Seriously?';
    } else if (value >= 1.45 && value <= 1.5) {
      return 'Criminal';
    } else {
      throw new Error(`Value ${value} outside of allowed bounds`);
    }
  }

  private convertEncountersToMonsters(encounters: EncounterMonsterInfo[]) {
    return encounters.map(e => {
      const monsters: Monster[] = [];
      for (let index = 0; index < e.quantity; index++) {
        monsters.push(e.monster);
      }

      return monsters;
    }).reduce((acc, val) => acc.concat(val), []);
  }

}