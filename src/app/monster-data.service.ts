import { Injectable } from '@angular/core';
import { communityData } from './data/community';
import { officialData } from './data/official';
import { thirdPartyData } from './data/third-party';
import { Monster, MonsterInfo } from './models/monster';

@Injectable({
  providedIn: 'root'
})
export class MonsterDataService {

  constructor() { }

  public getOfficialMonsters(): Monster[] {
    return this.convertMonsterInfoToMonsterClass(officialData);
  }

  public getCommunityMonsters(): Monster[] {
    return this.convertMonsterInfoToMonsterClass(communityData);
  }

  public getThirdPartyMonsters(): Monster[] {
    return this.convertMonsterInfoToMonsterClass(thirdPartyData);
  }

  public getAllMonsters(): Monster[] {
    return this.getOfficialMonsters()
            .concat(this.getCommunityMonsters())
            .concat(this.getThirdPartyMonsters());
  }

  private convertMonsterInfoToMonsterClass(info: MonsterInfo[]): Monster[] {
    return info.map(i => new Monster(i));
  }
}
