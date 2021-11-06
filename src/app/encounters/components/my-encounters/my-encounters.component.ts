import { Component, OnInit } from '@angular/core';
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

  constructor(
    private readonly campaignData: CampaignDataService
  ) { }

  async ngOnInit(): Promise<void> {
    this.campaigns = await this.campaignData.getAllCampaigns();
  }

}
