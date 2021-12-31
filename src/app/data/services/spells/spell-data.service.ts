import { Injectable } from '@angular/core';
import { Spell } from 'src/app/spells/models/spell';
import { DatabaseService } from '../database.service';

@Injectable({
  providedIn: 'root'
})
export class SpellDataService {

  constructor(
    private db: DatabaseService
  ) {  }

  public async getAllSpells(): Promise<Spell[]> {
    return this.db.getDatabaseContext().spells.toArray();
  }

  public async clearSpells(): Promise<void> {
    return this.db.getDatabaseContext().spells.clear();
  }
}
