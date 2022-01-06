import { Injectable } from '@angular/core';

import Dexie from 'dexie';
import { ISpell, Spell } from 'src/app/spells/models/spell';
import { Campaign } from '../../campaigns/models/campaign';
import {
  Encounter,
  GeneratedEncounter,
} from '../../encounters/models/encounter';
import { Monster } from '../../monsters/models/monster';

@Injectable({
  providedIn: 'root',
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
  readonly monsters: Dexie.Table<Monster, string>;
  readonly campaigns: Dexie.Table<Campaign, number>;
  readonly encounters: Dexie.Table<Encounter, number>;
  readonly spells: Dexie.Table<Spell, string>;
}

class HouseOfGateDao extends Dexie implements IHouseOfGateDao {
  public readonly monsters!: Dexie.Table<Monster, string>;
  public readonly campaigns!: Dexie.Table<Campaign, number>;
  public readonly encounters!: Dexie.Table<Encounter, number>;
  public readonly spells!: Dexie.Table<Spell, string>;

  constructor() {
    super('house-of-gate');

    this.setupStructures();
    this.setupTableMappings();
    this.prepopulateIfNecessary();
  }

  private setupTableMappings() {
    this.table('monsters').mapToClass(Monster);
    this.table('encounters').mapToClass(GeneratedEncounter);
    this.table('campaigns').mapToClass(Campaign);
    this.table('spells').mapToClass(Spell);
  }

  private prepopulateIfNecessary() {
    this.on('ready', async () => {
      const numberOfMonsters = await this.monsters.count();
      const numberOfSpells = await this.spells.count();

      if (numberOfMonsters > 0 && numberOfSpells > 0) {
        return;
      }

      const monstersWorker$ = new Promise((resolve) => {
        const monstersWorker = new Worker(
          new URL('../db-monsters-loader.worker', import.meta.url),
          { type: 'module' }
        );
        monstersWorker.onmessage = async ({ data }) => {
          resolve({ data, worker: monstersWorker });
        };
        monstersWorker.postMessage('');
      });
      const spellsWorker$ = new Promise((resolve) => {
        const spellsWorker = new Worker(
          new URL('../db-spells-loader.worker', import.meta.url),
          { type: 'module' }
        );
        spellsWorker.onmessage = async ({ data }) => {
          resolve({ data, worker: spellsWorker });
        };
        spellsWorker.postMessage('');
      });

      return Promise.all([
        monstersWorker$ as Promise<{ data: Monster[]; worker: Worker }>,
        spellsWorker$ as Promise<{ data: ISpell[]; worker: Worker }>,
      ]).then(async (resolved) => {
        const monsters: Monster[] = resolved[0].data;
        const monsterWorker: Worker = resolved[0].worker;

        const spells: ISpell[] = resolved[1].data;
        const spellWorker: Worker = resolved[1].worker;

        await this.monsters.clear();
        await this.spells.clear();

        await this.monsters.bulkAdd(monsters);
        await this.spells.bulkAdd(spells);

        monsterWorker.terminate();
        spellWorker.terminate();
      });
    });
  }

  private setupStructures() {
    this.version(1).stores({
      monsters:
        '++id,name,cr,size,type,alignment,*environment,legendary,unique,*sources',
      campaigns: '++id,&name,date',
      encounters: '++id,&name,date,campaignId,*monsterIds',
    });

    this.version(2).stores({
      campaigns: '++id,&name,date,encounterIds',
    });

    this.version(5).stores({
      monsters: null,
    });

    this.version(6).stores({
      monsters:
        'id,name,cr,size,type,alignment,*environment,legendary,unique,*sources',
    });

    this.version(7).stores({
      campaigns: '++id,&name,date',
    });

    this.version(8).stores({
      encounters: '++id,name,date,campaignId,*monsterIds',
    });

    this.version(9).stores({
      campaigns: '++id,name,date',
    });

    this.version(10).upgrade((trans) => {
      const monstersTable = trans.table('monsters');
      monstersTable.clear();
    });

    this.version(11).stores({
      spells: 'id,name,level',
    });
  }
}
