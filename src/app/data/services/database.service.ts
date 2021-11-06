import { Injectable } from '@angular/core';

import Dexie from 'dexie';
import { Campaign } from '../../campaigns/models/campaign';
import { Encounter, GeneratedEncounter } from '../../encounters/models/encounter';
import { Monster } from '../../monsters/models/monster';

@Injectable({
  providedIn: 'root'
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
  readonly encounters: Dexie.Table<Encounter, number>;
}

class HouseOfGateDao extends Dexie implements IHouseOfGateDao {
  public readonly monsters!: Dexie.Table<Monster, number>;
  public readonly campaigns!: Dexie.Table<Campaign, number>;
  public readonly encounters!: Dexie.Table<Encounter, number>;

  constructor() {
    super('house-of-gate');

    this.setupStructures();
    this.setupTableMappings();
    this.prepopulateIfNecessary();

    this.open();
  }

  private setupTableMappings() {
    this.table('monsters').mapToClass(Monster);
    this.table('encounters').mapToClass(GeneratedEncounter);
    this.table('campaigns').mapToClass(Campaign);
  }

  private prepopulateIfNecessary() {
    this.on('ready', async () => {
      const numberOfMonsters = await this.monsters.count();
      if (numberOfMonsters > 0) {
        return;
      } else {
        return new Promise(resolve => {
          const worker = new Worker(
            new URL('../db-initializer.worker', import.meta.url),
            { type: 'module' }
          );
          worker.onmessage = async ({ data }) => {
            resolve(data);
          };
          worker.postMessage('');
        }).then(monsters => {
          const bulkAdd = this.monsters.bulkAdd(monsters as Monster[]);
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

    this.version(5).stores({
      monsters: null,
    });

    this.version(6).stores({
      monsters: "id,name,cr,size,type,alignment,*environment,legendary,unique,*sources",
    });

    this.version(7).stores({
      campaigns: "++id,&name,date"
    });

    this.version(8).stores({
      encounters: "++id,name,date,campaignId,*monsterIds"
    });
  }
}
