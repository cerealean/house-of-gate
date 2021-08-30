import { Injectable } from '@angular/core';
import { communityData } from './data/community';
import { officialData } from './data/official';
import { thirdPartyData } from './data/third-party';
import { Monster, MonsterInfo } from './models/monster';

@Injectable({
  providedIn: 'root'
})
export class MonsterDataService {
  private officialMonsterData: Promise<Monster[]> | undefined;
  private communityMonsterData: Promise<Monster[]> | undefined;
  private thirdPartyMonsterData: Promise<Monster[]> | undefined;

  constructor() { }

  public async getOfficialMonsters(): Promise<Monster[]> {
    if(!this.officialMonsterData) {
      this.officialMonsterData = this.convertMonsterInfoToMonsterClass(officialData);
    }

    return this.officialMonsterData;
  }

  public async getCommunityMonsters(): Promise<Monster[]> {
    if(!this.communityMonsterData) {
      this.communityMonsterData = this.convertMonsterInfoToMonsterClass(communityData);
    }

    return this.communityMonsterData;
  }

  public async getThirdPartyMonsters(): Promise<Monster[]> {
    if(!this.thirdPartyMonsterData) {
      this.thirdPartyMonsterData = this.convertMonsterInfoToMonsterClass(thirdPartyData);
    }

    return this.thirdPartyMonsterData;
  }

  public async getAllMonsters(): Promise<Monster[]> {
    const official$ = this.getOfficialMonsters();
    const community$ = this.getCommunityMonsters();
    const thirdParty$ = this.getThirdPartyMonsters();
    const [official, community, thirdParty] = await Promise.all([
      official$,
      community$,
      thirdParty$
    ]);
    return official
      .concat(community)
      .concat(thirdParty);
  }

  private convertMonsterInfoToMonsterClass(info: MonsterInfo[]): Promise<Monster[]> {
    return new Promise(resolve => {
      const monsters = info.map(i => new Monster(i));

      resolve(monsters);
    });
  }
}
