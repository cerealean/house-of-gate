import { Injectable } from '@angular/core';

import Dexie from 'dexie';
import { Monster, MonsterInfo } from '../monsters/models/monster';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private readonly db: Dexie;

  constructor() {
    this.db = new Dexie('house-of-gate', { autoOpen: false });
    this.db.version(1).stores({
      monsters: "++id,name,cr,size,type,alignment,*environment,legendary,unique,*sources",
      campaigns: "++id,&name,date",
      encounters: "++id,&name,date,campaignId,*monsterIds"
    });

    this.db.on('ready', async () => {
      const numberOfMonsters = await this.db.table('monsters').count();
      if (numberOfMonsters > 0) {
        return;
      } else {
        return new Promise(resolve => {
          const worker = new Worker(
            new URL('../data/db-initializer.worker', import.meta.url),
            { type: 'module' }
          );
          worker.onmessage = async ({ data }) => {
            resolve(data);
          };
          worker.postMessage('');
        }).then(monsterInfo => {
          const monsters = (monsterInfo as MonsterInfo[]).map(mi => new Monster(mi));
          const bulkAdd = this.db.table('monsters').bulkAdd(monsters);
          return bulkAdd;
        });
      }
    });
    this.db.open();
  }

  public getDatabaseContext(): Dexie {
    return this.db;
  }
}
