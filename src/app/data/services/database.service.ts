import { Injectable } from '@angular/core';

import Dexie from 'dexie';
import { Campaign } from '../../campaigns/models/campaign';
import { GeneratedEncounter } from '../../encounters/models/encounter';
import { Monster, MonsterInfo } from '../../monsters/models/monster';
import { DataModule } from '../data.module';

@Injectable({
  providedIn: DataModule
})
export class DatabaseService {
  private readonly db: IHouseOfGateDao;

  constructor() {
    this.db = new HouseOfGateDao();
  }

  public getDatabaseContext(): IHouseOfGateDao {
    return this.db;
  }
}

export interface IHouseOfGateDao {
  readonly monsters: Dexie.Table<Monster, number>;
  readonly campaigns: Dexie.Table<Campaign, number>;
  readonly encounters: Dexie.Table<GeneratedEncounter, number>;
}

class HouseOfGateDao extends Dexie implements IHouseOfGateDao {
  public readonly monsters: Dexie.Table<Monster, number>;
  public readonly campaigns: Dexie.Table<Campaign, number>;
  public readonly encounters: Dexie.Table<GeneratedEncounter, number>;

  constructor() {
    super('house-of-gate');

    this.setupStructures();

    this.monsters = this.table('monsters');
    this.encounters = this.table('encounters');
    this.campaigns = this.table('campaigns');

    this.prepopulateIfNecessary();

    this.open();
  }

  private prepopulateIfNecessary() {
    this.on('ready', async () => {
      const numberOfMonsters = await this.monsters.count();
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
          const bulkAdd = this.monsters.bulkAdd(monsters);
          return bulkAdd;
        });
      }
    });
  }

  private setupStructures() {
    this.version(1).stores({
      monsters: "++id,name,cr,size,type,alignment,*environment,legendary,unique,*sources",
      campaigns: "++id,&name,date",
      encounters: "++id,&name,date,campaignId,*monsterIds"
    });

    this.version(2).stores({
      campaigns: "++id,&name,date,encounterIds"
    });
  }
}
