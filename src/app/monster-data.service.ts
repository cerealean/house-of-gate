import { Injectable } from '@angular/core';
import { communityData } from './data/community';
import { officialData } from './data/official';
import { thirdPartyData } from './data/third-party';
import { Monster } from './models/monster';

@Injectable({
  providedIn: 'root'
})
export class MonsterDataService {

  constructor() { }

  public getOfficialMonsters(): Monster[] {
    return officialData;
  }

  public getCommunityMonsters(): Monster[] {
    return communityData;
  }

  public getThirdPartyMonsters(): Monster[] {
    return thirdPartyData;
  }

  public getAllMonsters(): Monster[] {
    return officialData.concat(communityData).concat(thirdPartyData);
  }
}
