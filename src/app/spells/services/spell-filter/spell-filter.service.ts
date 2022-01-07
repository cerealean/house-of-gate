import { Injectable } from '@angular/core';
import { Spell } from '../../models/spell';
import { SpellFilters } from '../../models/spell-filters';

@Injectable({
  providedIn: 'root'
})
export class SpellFilterService {

  constructor() { }

  public filterMonsters(spells: Spell[], filterOptions: SpellFilters): Spell[] {
    let filteredSpells = spells.slice();

    if(filterOptions.name) {
      filteredSpells = filteredSpells.filter(x => x.name.toLowerCase().includes(filterOptions.name!.toLowerCase()));
    }
    if(filterOptions.minLevel && typeof filterOptions.minLevel === 'number' && filterOptions.minLevel !== 0) {
      filteredSpells = filteredSpells.filter(x => x.level >= filterOptions.minLevel!);
    }
    if(filterOptions.maxLevel && typeof filterOptions.maxLevel === 'number' && filterOptions.maxLevel !== 9) {
      filteredSpells = filteredSpells.filter(x => x.level <= filterOptions.maxLevel!);
    }
    if(filterOptions.school?.length) {
      filteredSpells = filteredSpells.filter(m => filterOptions.school?.includes(m.school!));
    }
    if(filterOptions.class?.length) {
      filteredSpells = filteredSpells.filter(m => m.hasClassIntersection(filterOptions.class!));
    }
    if(filterOptions.ritual === true || filterOptions.ritual === false) {
      filteredSpells = filteredSpells.filter(m => m.ritual === filterOptions.ritual);
    }
    if(filterOptions.source?.length) {
      filteredSpells = filteredSpells.filter(m => m.hasSourceIntersection(filterOptions.source!));
    }

    return filteredSpells;
  }
}
