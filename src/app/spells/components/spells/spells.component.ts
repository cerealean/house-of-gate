import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SpellDataService } from 'src/app/data/services/spells/spell-data.service';
import { StorageKeys, StorageService } from 'src/app/services/storage.service';
import { Spell } from '../../models/spell';
import { SpellFilters } from '../../models/spell-filters';
import { SpellFilterService } from '../../services/spell-filter/spell-filter.service';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.scss']
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
