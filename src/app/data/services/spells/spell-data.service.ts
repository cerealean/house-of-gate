import { Injectable } from '@angular/core';

import { Spell } from 'src/app/spells/models/spell';

import { DatabaseService } from '../database.service';

@Injectable({
  providedIn: 'root',
})
export class SpellDataService {
  private allSpells?: Spell[];

  constructor(private readonly db: DatabaseService) {}

  public async getAllSpells(): Promise<ReadonlyArray<Readonly<Spell>>> {
    if (!this.allSpells) {
      this.allSpells = await this.db.getDatabaseContext().spells.toArray();
    }

    return this.allSpells;
  }

  public async clearSpells(): Promise<void> {
    this.allSpells = undefined;

    return this.db.getDatabaseContext().spells.clear();
  }
}
