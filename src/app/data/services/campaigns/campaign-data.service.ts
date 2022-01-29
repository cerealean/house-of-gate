import { Injectable } from '@angular/core';
import { Campaign } from 'src/app/campaigns/models/campaign';
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

  public async editCampaign(campaign: Campaign): Promise<void> {
    await this.db.campaigns.put(campaign);
  }

  public async deleteCampaign(campaignId: number): Promise<void> {
    await this.db.campaigns.delete(campaignId);
  }

  public async getCampaignByName(name: string): Promise<Campaign | undefined> {
    return this.db.campaigns.where('name').equalsIgnoreCase(name).first();
  }

  public async getAllCampaigns(): Promise<Campaign[]> {
    const campaigns = await this.db.campaigns.toArray();
    const campaignsHydrated = await Promise.all(campaigns.map(async c => {
      c.encounters = await this.db.encounters
        .filter(e => e.campaignId !== undefined && e.campaignId === c.id)
        .toArray();
      c.characters = await this.db.characters
        .filter(character => character.campaignIds.includes(c.id!))
        .toArray();

      await Promise.all(
        c.encounters.map(async e => {
          e.monsters = await this.db.monsters
            .where("id")
            .anyOf(e.monsterIds)
            .toArray();
        })
      );

      return c;
    }));

    return campaignsHydrated;
  }
}
