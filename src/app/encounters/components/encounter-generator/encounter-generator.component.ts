import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Subscription } from 'rxjs';
import { EncounterDifficulties } from 'src/app/monsters/enums/encounter-difficulties';
import { EncounterRequest } from 'src/app/encounters/models/encounter-request';
import { Monster } from 'src/app/monsters/models/monster';
import { MonsterFilters } from 'src/app/monsters/models/monster-filters';
import { EncounterGenerator2Service } from 'src/app/monsters/services/encounter-generator-2.service';
import { StorageService, StorageKeys } from 'src/app/services/storage.service';
import { PreviousEncountersComponent } from '../previous-encounters/previous-encounters.component';

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
    private readonly encounterGenerator2: EncounterGenerator2Service,
    private matBottomSheet: MatBottomSheet,
    private storage: StorageService
  ) { }

  ngOnInit(): void {
    const currentMonsterFilters = this.storage.getData<MonsterFilters>(StorageKeys.EncounterGeneratorMonsterFilters);
    const currentEncounterRequest = this.storage.getData<EncounterRequest>(StorageKeys.EncounterFilters);
    if(currentMonsterFilters) {
      this.filters = currentMonsterFilters;
      this.updateFilters();
    }
    if (currentEncounterRequest) {
      this.encounterRequest = currentEncounterRequest;
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  openPreviousEncounters(): void {
    const ref = this.matBottomSheet.open(PreviousEncountersComponent);
    const selected$ = ref.instance.previousEncounterSelected.subscribe(encounter => {
      this.encounterRequest = { ...encounter.request };
      this.monsters = encounter.monsters.slice();
      ref.dismiss();
    });
    const afterDismissed$ = ref.afterDismissed().subscribe(() => {
      selected$?.unsubscribe();
    });
    this.subscriptions.add(selected$);
    this.subscriptions.add(afterDismissed$);
  }

  async generateRandomEncounter(): Promise<void> {
    const encounter = await this.encounterGenerator2.generateEncounter(this.encounterRequest, this.filters);
    this.monsters = encounter.monsters.slice();
  }

  updateMonsterFilters(filters: MonsterFilters): void {
    this.filters = filters;
    this.storage.setData(StorageKeys.EncounterGeneratorMonsterFilters, filters);
  }

  updateFilters(): void {
    this.storage.setData(StorageKeys.EncounterFilters, this.encounterRequest);
  }

  formatSlider(value: number): string {
    if (value >= 0.5 && value < 0.6) {
      return 'Child\'s Play';
    } else if (value >= 0.6 && value < 0.75) {
      return 'Super Easy';
    } else if (value >= 0.75 && value < 0.85) {
      return 'Very Easy';
    } else if (value >= 0.85 && value < 0.93) {
      return 'Easy';
    } else if (value >= 0.93 && value < 0.98) {
      return 'Light';
    } else if (value >= 0.98 && value < 1.05) {
      return 'Normal';
    } else if (value >= 1.05 && value < 1.15) {
      return 'Slightly Difficult';
    } else if (value >= 1.15 && value < 1.3) {
      return 'Difficult';
    } else if (value >= 1.3 && value < 1.45) {
      return 'Hard';
    } else if (value >= 1.45 && value <= 1.5) {
      return 'Very Hard';
    } else if (value > 1.5 && value <= 1.75) {
      return 'Criminal'
    } else if (value > 1.75 && value <= 2) {
      return 'TPK'
    } else {
      throw new Error(`Value ${value} outside of allowed bounds`);
    }
  }

}
