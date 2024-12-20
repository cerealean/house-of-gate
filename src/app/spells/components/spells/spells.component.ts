import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SpellDataService } from 'src/app/data/services/spells/spell-data.service';
import { StorageKeys, StorageService } from 'src/app/services/storage.service';
import { Spell } from '../../models/spell';
import { SpellFilters } from '../../models/spell-filters';
import { SpellFilterService } from '../../services/spell-filter/spell-filter.service';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatIcon } from '@angular/material/icon';
import { FlexModule } from '@ngbracket/ngx-layout/flex';
import { MatCard } from '@angular/material/card';
import { SpellTablesComponent } from '../../../common/components/spell-tables/spell-tables.component';
import { NgIf } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { SpellFilterBarComponent } from '../../../common/components/spell-filter-bar/spell-filter-bar.component';

@Component({
    selector: 'app-spells',
    templateUrl: './spells.component.html',
    styleUrls: ['./spells.component.scss'],
    imports: [SpellFilterBarComponent, MatDivider, NgIf, SpellTablesComponent, MatCard, FlexModule, MatIcon, MatProgressSpinner]
})
export class SpellsComponent implements OnInit, AfterViewInit {
  private allSpells: Spell[] = [];
  public displayedSpells: Spell[] = [];
  public filters!: SpellFilters;
  public isLoading = true;

  constructor(
    private readonly spellDataService: SpellDataService,
    private readonly spellFilter: SpellFilterService,
    private readonly storage: StorageService
  ) { }

  async ngOnInit(): Promise<void> {
    await this.loadSpellData();
  }

  ngAfterViewInit(): void {
    const currentMonsterFilters = this.storage.getData<SpellFilters>(StorageKeys.SpellFilters);
    if(currentMonsterFilters) {
      setTimeout(() => {
        this.filter(currentMonsterFilters);
      }, 500);
    }
  }

  filter(filters: SpellFilters) {
    this.filters = filters;
    const filteredSpells = this.spellFilter.filterMonsters(
      this.allSpells,
      this.filters
    );
    this.displayedSpells = filteredSpells;
    this.storage.setData(StorageKeys.SpellFilters, filters);
  }

  tableLoading(isLoading: boolean): void {
    setTimeout(() => {
      this.isLoading = isLoading;
    });
  }

  private async loadSpellData() {
    const allSpells = await this.spellDataService.getAllSpells();
    this.allSpells = this.sortSpells(allSpells);
    this.displayedSpells = this.allSpells.slice();
  }

  private sortSpells(spells: Spell[]): Spell[] {
    return spells.sort((first, second) => {
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
