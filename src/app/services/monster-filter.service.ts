import { stringify } from '@angular/compiler/src/util';
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
      filteredMonsters = filteredMonsters.filter(x => x.name.toLowerCase().includes(filterOptions.name!.toLowerCase()));
    }
    if(filterOptions.minCr && typeof filterOptions.minCr === 'number' && filterOptions.minCr !== 0) {
      filteredMonsters = filteredMonsters.filter(x => x.cr >= filterOptions.minCr!);
    }
    if(filterOptions.maxCr && typeof filterOptions.maxCr === 'number' && filterOptions.maxCr !== 30) {
      filteredMonsters = filteredMonsters.filter(x => x.cr <= filterOptions.maxCr!);
    }
    if(filterOptions.type?.length) {
      filteredMonsters = filteredMonsters.filter(m => m.hasTypeIntersection(filterOptions.type!));
    }
    if(filterOptions.environment?.length) {
      filteredMonsters = filteredMonsters.filter(m => m.hasEnvironmentIntersection(filterOptions.environment!));
    }
    if(filterOptions.legendary !== undefined && filterOptions.legendary !== null && typeof filterOptions.legendary === 'boolean') {
      filteredMonsters = filteredMonsters.filter(m => m.legendary === filterOptions.legendary);
    }
    if(filterOptions.unique !== undefined && filterOptions.unique !== null && typeof filterOptions.unique === 'boolean') {
      filteredMonsters = filteredMonsters.filter(m => m.unique === filterOptions.unique);
    }

    return filteredMonsters;
  }

  public doesMonsterMatchFilter(monster: Monster, filterOptions: MonsterFilters) {
    const result = this.filterMonsters([monster], filterOptions);

    return result && result.length === 1;
  }

  private convertStringToArray(value: string | string[]) {
    if(Array.isArray(value)) {
      return value;
    }

    return value.split(',').map(v => v.trim());
  }
}
