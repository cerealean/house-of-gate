import { Injectable } from '@angular/core';
import { Monster, MonsterInfo } from '../models/monster';
import { MonsterFilters } from '../models/monster-filters';
import { MonsterFilterService } from './monster-filter.service';

@Injectable({
  providedIn: 'root'
})
export class MonsterDataService {
  private allMonsters: Monster[] = [];

  constructor(
    private monsterFilter: MonsterFilterService
  ) {
    const worker = new Worker(
      new URL('../monster-loader.worker', import.meta.url),
      { type: 'module' }
    );
    worker.onmessage = ({ data }) => {
      const allMonsters = data.map((i: MonsterInfo) => new Monster(i)) as Monster[];
      this.allMonsters = allMonsters.sort((first, second) => {
        if (first.name > second.name) {
          return 1;
        } else if (second.name > first.name) {
          return -1;
        } else {
          return 0;
        }
      });
    };
    worker.postMessage('');
  }
  public async getAllMonsters(filters?: MonsterFilters): Promise<Monster[]> {
    const allMonstersCopy = this.allMonsters.slice();
    return filters
      ? this.monsterFilter.filterMonsters(allMonstersCopy, filters)
      : allMonstersCopy;
  }
}
