import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EncounterDifficulties } from 'src/app/monsters/enums/encounter-difficulties';
import { EncounterRequest } from 'src/app/encounters/models/encounter-request';
import { MonsterFilters } from 'src/app/monsters/models/monster-filters';
import { EncounterGenerator2Service } from 'src/app/monsters/services/encounter-generator-2.service';
import { StorageService, StorageKeys } from 'src/app/services/storage.service';
import { GeneratedEncounter } from '../../models/encounter';
import { MatDialog } from '@angular/material/dialog';
import { SaveEncounterDialogComponent } from '../save-encounter-dialog/save-encounter-dialog.component';

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
  // monsters: Monster[] = [];
  generatedEncounter?: GeneratedEncounter;

  private subscriptions = new Subscription();

  constructor(
    private readonly encounterGenerator2: EncounterGenerator2Service,
    private storage: StorageService,
    public dialog: MatDialog
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

  async generateRandomEncounter(): Promise<void> {
    this.generatedEncounter = await this.encounterGenerator2.generateEncounter(this.encounterRequest, this.filters);
  }

  saveEncounter() {
    this.dialog.open(SaveEncounterDialogComponent, { data: this.generatedEncounter, autoFocus: false });
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
