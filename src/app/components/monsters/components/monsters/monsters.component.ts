import { NgIf } from "@angular/common";
import { AfterViewInit, Component, OnInit } from "@angular/core";
import { MatCard } from "@angular/material/card";
import { MatDivider } from "@angular/material/divider";
import { MatIcon } from "@angular/material/icon";
import { MatProgressSpinner } from "@angular/material/progress-spinner";
import { FlexModule } from "@ngbracket/ngx-layout/flex";
import { MonsterFilterBarComponent } from "src/app/common/components/monster-filter-bar/monster-filter-bar.component";
import { MonsterTablesComponent } from "src/app/common/components/monster-tables/monster-tables.component";
import { MonsterDataService } from "src/app/data/services/monsters/monster-data.service";
import { StorageKeys, StorageService } from "src/app/services/storage.service";
import type { Monster } from "../../models/monster";
import { MonsterFilters } from "../../models/monster-filters";
import { MonsterFilterService } from "../../services/monster-filter.service";

@Component({
  selector: "app-monsters",
  templateUrl: "./monsters.component.html",
  styleUrls: ["./monsters.component.scss"],
  standalone: true,
  imports: [
    MonsterFilterBarComponent,
    MatDivider,
    NgIf,
    MonsterTablesComponent,
    MatCard,
    FlexModule,
    MatIcon,
    MatProgressSpinner,
  ],
})
export class MonstersComponent implements OnInit, AfterViewInit {
  private allMonsters: Monster[] = [];
  public displayedMonsters: Monster[] = [];
  public filters!: MonsterFilters;
  public isLoading = true;

  constructor(
    private readonly monsterDataService: MonsterDataService,
    private readonly monsterFilter: MonsterFilterService,
    private readonly storage: StorageService
  ) {}

  async ngOnInit(): Promise<void> {
    await this.loadMonsterData();
  }

  ngAfterViewInit(): void {
    const currentMonsterFilters = this.storage.getData<MonsterFilters>(
      StorageKeys.MonsterFilters
    );
    if (currentMonsterFilters) {
      setTimeout(() => {
        this.filter(currentMonsterFilters);
      });
    }
  }

  filter(filters: MonsterFilters) {
    setTimeout(() => {
      this.filters = filters;
      const filteredMonsters = this.monsterFilter.filterMonsters(
        this.allMonsters,
        this.filters
      );
      this.displayedMonsters = filteredMonsters;
      this.storage.setData(StorageKeys.MonsterFilters, filters);
    });
  }

  tableLoading(isLoading: boolean): void {
    setTimeout(() => {
      this.isLoading = isLoading;
    });
  }

  private async loadMonsterData() {
    const allMonsters = await this.monsterDataService.getAllMonsters();
    this.allMonsters = this.sortMonsters(allMonsters);
    this.displayedMonsters = this.allMonsters.slice();
  }

  private sortMonsters(allMonsters: Monster[]): Monster[] {
    return allMonsters.sort((first, second) => {
      if (first.name > second.name) {
        return 1;
      } else if (second.name > first.name) {
        return -1;
      } else {
        return 0;
      }
    });
  }
}
