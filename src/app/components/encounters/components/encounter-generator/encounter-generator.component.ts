
import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButton } from "@angular/material/button";
import { MatCard } from "@angular/material/card";
import { MatDialog } from "@angular/material/dialog";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatIcon } from "@angular/material/icon";
import { MatInput } from "@angular/material/input";
import { MatSlider, MatSliderThumb } from "@angular/material/slider";
import { FlexModule } from "@ngbracket/ngx-layout/flex";
import { Subscription } from "rxjs";
import { MonsterFilterBarComponent } from "src/app/common/components/monster-filter-bar/monster-filter-bar.component";
import { MonsterTablesComponent } from "src/app/common/components/monster-tables/monster-tables.component";
import { NumberOnlyDirective } from "src/app/common/directives/number-only.directive";
import { EncounterDifficulties } from "src/app/components/monsters/enums/encounter-difficulties";
import type { MonsterFilters } from "src/app/components/monsters/models/monster-filters";
import { EncounterGenerator2Service } from "src/app/components/monsters/services/encounter-generator-2.service";
import { StorageKeys, StorageService } from "src/app/services/storage.service";
import type { GeneratedEncounter } from "../../models/encounter";
import type { EncounterRequest } from "../../models/encounter-request";
import { SaveEncounterDialogComponent } from "../save-encounter-dialog/save-encounter-dialog.component";

@Component({
  selector: "app-encounter-generator",
  templateUrl: "./encounter-generator.component.html",
  styleUrls: ["./encounter-generator.component.scss"],
  standalone: true,
  imports: [
    MonsterFilterBarComponent,
    MatCard,
    FlexModule,
    MatFormField,
    MatLabel,
    MatInput,
    FormsModule,
    NumberOnlyDirective,
    MatSlider,
    MatSliderThumb,
    MatButton,
    MatIcon,
    MonsterTablesComponent
],
})
export class EncounterGeneratorComponent implements OnDestroy, OnInit {
  public readonly EncounterDifficulties = EncounterDifficulties;

  @Input() public filters!: MonsterFilters;

  encounterRequest: EncounterRequest = {
    level: 5,
    maxNumberOfEnemies: 6,
    numberOfPlayers: 4,
    difficultyAmount: 0.75,
  };
  // monsters: Monster[] = [];
  generatedEncounter?: GeneratedEncounter;

  private subscriptions = new Subscription();

  constructor(
    private readonly encounterGenerator2: EncounterGenerator2Service,
    private storage: StorageService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const currentMonsterFilters = this.storage.getData<MonsterFilters>(
      StorageKeys.EncounterGeneratorMonsterFilters
    );
    const currentEncounterRequest = this.storage.getData<EncounterRequest>(
      StorageKeys.EncounterFilters
    );
    if (currentMonsterFilters) {
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
    this.generatedEncounter = await this.encounterGenerator2.generateEncounter(
      this.encounterRequest,
      this.filters
    );
  }

  saveEncounter() {
    this.dialog.open(SaveEncounterDialogComponent, {
      data: this.generatedEncounter,
      autoFocus: false,
    });
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
      return "Child's Play";
    } else if (value >= 0.6 && value < 0.75) {
      return "Super Easy";
    } else if (value >= 0.75 && value < 0.85) {
      return "Very Easy";
    } else if (value >= 0.85 && value < 0.93) {
      return "Easy";
    } else if (value >= 0.93 && value < 0.98) {
      return "Light";
    } else if (value >= 0.98 && value < 1.05) {
      return "Normal";
    } else if (value >= 1.05 && value < 1.15) {
      return "Slightly Difficult";
    } else if (value >= 1.15 && value < 1.3) {
      return "Difficult";
    } else if (value >= 1.3 && value < 1.45) {
      return "Hard";
    } else if (value >= 1.45 && value <= 1.5) {
      return "Very Hard";
    } else if (value > 1.5 && value <= 1.75) {
      return "Criminal";
    } else if (value > 1.75 && value <= 2) {
      return "TPK";
    } else {
      throw new Error(`Value ${value} outside of allowed bounds`);
    }
  }
}
