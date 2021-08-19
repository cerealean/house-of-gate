import { Injectable } from '@angular/core';
import { Monster } from '../models/monster';
import { MonsterFilters } from '../models/monster-filters';

@Injectable({
  providedIn: 'root'
})
export class MonsterFilterService {

  constructor() { }

  public filterMonsters(monsters: Monster[], filterOptions: MonsterFilters): Monster[] {
    let filteredMonsters = monsters.slice();

    if(filterOptions.name) {
      filteredMonsters = filteredMonsters.filter(x => x.name.toLowerCase().includes(filterOptions.name.toLowerCase()));
    }
    if(filterOptions.minCr && filterOptions.minCr !== 0) {
      filteredMonsters = filteredMonsters.filter(x => x.cr >= filterOptions.minCr);
    }
    if(filterOptions.maxCr && filterOptions.maxCr !== 30) {
      filteredMonsters = filteredMonsters.filter(x => x.cr <= filterOptions.maxCr);
    }
    if(filterOptions.type) {
      filteredMonsters = filteredMonsters.filter(m => m.type === filterOptions.type);
    }

    return filteredMonsters;
  }

  public doesMonsterMatchFilter(monster: Monster, filterOptions: MonsterFilters) {
    const result = this.filterMonsters([monster], filterOptions);

    return result && result.length === 1;
  }
}
