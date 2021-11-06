import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Campaign } from 'src/app/campaigns/models/campaign';
import { CampaignDataService } from 'src/app/data/services/campaigns/campaign-data.service';
import { Encounter } from '../../models/encounter';

@Component({
  selector: 'app-my-encounters',
  templateUrl: './my-encounters.component.html',
  styleUrls: ['./my-encounters.component.scss']
})
export class MyEncountersComponent implements OnInit {
  public campaigns: Campaign[] = [];
  public selectedCampaign?: Campaign;
  public selectedEncounter?: Encounter;

  private givenCampaignId?: number;

  constructor(
    private readonly campaignData: CampaignDataService,
    router: Router
  ) {
    this.givenCampaignId = router.getCurrentNavigation()?.extras?.state?.campaignId;
  }

  async ngOnInit(): Promise<void> {
    this.campaigns = await this.campaignData.getAllCampaigns();

    if (this.givenCampaignId) {
      this.selectedCampaign = this.campaigns.find(c => c.id === this.givenCampaignId);
      if (this.selectedCampaign) {
        this.onCampaignChange(this.selectedCampaign);
      }
    }
    else if (this.campaigns.length === 1) {
      this.selectedCampaign = this.campaigns[0];
      this.onCampaignChange(this.selectedCampaign);
    }
  }

  onCampaignChange(campaign: Campaign) {
    if (campaign.encounters.length === 1) {
      this.selectedEncounter = campaign.encounters[0];
    } else {
      this.selectedEncounter = undefined;
    }
  }

}
