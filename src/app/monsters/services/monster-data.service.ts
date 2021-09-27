import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Monster, MonsterInfo } from '../models/monster';

@Injectable({
  providedIn: 'any'
})
export class MonsterDataService {
  private officialMonsterData: Promise<Monster[]> | undefined;
  private communityMonsterData: Promise<Monster[]> | undefined;
  private thirdPartyMonsterData: Promise<Monster[]> | undefined;

  constructor(private httpClient: HttpClient) { }

  public async getOfficialMonsters(): Promise<Monster[]> {
    if(!this.officialMonsterData) {
      this.officialMonsterData = this.getMonstersFromFile('/data/official.json');
    }

    return this.officialMonsterData;
  }

  public async getCommunityMonsters(): Promise<Monster[]> {
    if(!this.communityMonsterData) {
      this.communityMonsterData = this.getMonstersFromFile('/data/community.json');
    }

    return this.communityMonsterData;
  }

  public async getThirdPartyMonsters(): Promise<Monster[]> {
    if(!this.thirdPartyMonsterData) {
      this.thirdPartyMonsterData = this.getMonstersFromFile('/data/third-party.json');
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

  private async getMonstersFromFile(url: string) {
    const response = await this.httpClient.get<MonsterInfo[]>(url).toPromise();
    return response.map(i => new Monster(i));
  }
}
