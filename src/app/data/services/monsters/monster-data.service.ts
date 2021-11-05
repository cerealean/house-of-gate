import { Injectable } from '@angular/core';
import { DatabaseService } from 'src/app/data/services/database.service';
import { Monster } from '../../../monsters/models/monster';

@Injectable({
  providedIn: 'any'
})
export class MonsterDataService {

  constructor(
    private db: DatabaseService
  ) {  }

  public async getAllMonsters(): Promise<Monster[]> {
    return this.db.getDatabaseContext().monsters.toArray();
  }
}
