import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SpellDataService } from 'src/app/data/services/spells/spell-data.service';
// import { StorageService, StorageKeys } from 'src/app/services/storage.service';
// import { MonsterDataService } from '../../../data/services/monsters/monster-data.service';
import { Spell } from '../../models/spell';

@Component({
  selector: 'app-monsters',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.scss']
})
export class SpellsComponent implements OnInit, AfterViewInit {
  private allSpells: Spell[] = [];
  public displayedSpells: Spell[] = [];
  // public filters!: MonsterFilters;
  public isLoading = true;

  constructor(
    private readonly spellDataService: SpellDataService,
    // private readonly monsterFilter: MonsterFilterService,
    // private readonly storage: StorageService
  ) { }

  async ngOnInit(): Promise<void> {
    await this.loadSpellData();
  }

  ngAfterViewInit(): void {
    const rawr = 0;
    // const currentMonsterFilters = this.storage.getData<MonsterFilters>(StorageKeys.MonsterFilters);
    // if(currentMonsterFilters) {
    //   setTimeout(() => {
    //     this.filter(currentMonsterFilters);
    //   }, 500);
    // }
  }

  // filter(filters: MonsterFilters) {
  //   this.filters = filters;
  //   const filteredMonsters = this.monsterFilter.filterMonsters(
  //     this.allMonsters,
  //     this.filters
  //   );
  //   this.displayedMonsters = filteredMonsters;
  //   this.storage.setData(StorageKeys.MonsterFilters, filters);
  // }

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