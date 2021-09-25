import { Component, OnInit } from '@angular/core';
import { Monster, MonsterInfo } from '../../models/monster';
import { MonsterFilters } from '../../models/monster-filters';
import { MonsterDataService } from '../../services/monster-data.service';
import { MonsterFilterService } from '../../services/monster-filter.service';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.scss']
})
export class MonstersComponent implements OnInit {
  private allMonsters: Monster[] = [];
  public displayedMonsters: Monster[] = [];
  public filters!: MonsterFilters;
  public isLoading = true;

  constructor(
    private readonly monsterDataService: MonsterDataService,
    private monsterFilter: MonsterFilterService,
  ) { }

  async ngOnInit(): Promise<void> {
    await this.loadMonsterData();
  }

  filter(filters: MonsterFilters) {
    this.filters = filters;
    const filteredMonsters = this.monsterFilter.filterMonsters(
      this.allMonsters,
      this.filters
    );
    this.displayedMonsters = filteredMonsters;
  }

  tableLoading(isLoading: boolean): void {
    setTimeout(() => {
      this.isLoading = isLoading;
    });
  }

  private async loadMonsterData() {
    if (typeof Worker !== 'undefined') {
      this.loadDataViaWorker();
    } else {
      await this.loadDataViaHttp();
    }
  }

  private loadDataViaWorker() {
    const worker = new Worker(
      new URL('../../monster-loader.worker', import.meta.url),
      { type: 'module' }
    );
    worker.onmessage = ({ data }) => {
      const allMonsters = data.map((i: MonsterInfo) => new Monster(i)) as Monster[];
      this.allMonsters = this.sortMonsters(allMonsters);
      this.displayedMonsters = this.allMonsters.slice();
    };
    worker.postMessage('');
  }

  private async loadDataViaHttp() {
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
