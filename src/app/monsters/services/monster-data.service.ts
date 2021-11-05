import { Injectable } from '@angular/core';
import { DatabaseService } from 'src/app/data/services/database.service';
import { Monster } from '../models/monster';
import { MonsterFilters } from '../models/monster-filters';
import { MonsterFilterService } from './monster-filter.service';

@Injectable({
  providedIn: 'root'
})
export class MonsterDataService {
  private allMonsters: Promise<Monster[]>;

  constructor(
    private monsterFilter: MonsterFilterService,
    private db: DatabaseService
  ) {
    this.allMonsters = this.db.getDatabaseContext()
      .monsters
      .toArray();
  }

  public async getAllMonsters(filters?: MonsterFilters): Promise<Monster[]> {
    const allMonstersCopy = (await this.allMonsters).slice();
    return filters
      ? this.monsterFilter.filterMonsters(allMonstersCopy, filters)
      : allMonstersCopy;
  }
}
