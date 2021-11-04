import { Injectable } from '@angular/core';
import { Campaign } from 'src/app/campaigns/models/campaign';
import { GeneratedEncounter } from 'src/app/encounters/models/encounter';
import { DatabaseService, IHouseOfGateDao } from '../database.service';

@Injectable({
  providedIn: 'any'
})
export class CampaignDataService {
  private readonly db: IHouseOfGateDao;

  constructor(database: DatabaseService) {
    this.db = database.getDatabaseContext();
  }

  public async addCampaign(campaign: Campaign): Promise<void> {
    await this.db.campaigns.add(campaign);
  }

  public async getAllCampaigns(): Promise<Campaign[]> {
    const campaigns = await this.db.campaigns.toArray();
    const campaignsHydrated = await Promise.all(campaigns.map(async c => {
      const encounters = await Promise.all(
        c.encounterIds.map(async id => await this.db.encounters.get(id))
      );
      const encountersWithoutUndefined = encounters.filter(x => !!x) as GeneratedEncounter[];
      c.encounters = encountersWithoutUndefined;

      return c;
    }));

    return campaignsHydrated;
  }
}
