import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CampaignDataService } from 'src/app/data/services/campaigns/campaign-data.service';
import { Campaign } from '../models/campaign';
import { NewCampaignComponent } from '../new-campaign/new-campaign.component';

@Component({
  selector: 'app-campaigns-landing',
  templateUrl: './campaigns-landing.component.html',
  styleUrls: ['./campaigns-landing.component.scss']
})
export class CampaignsLandingComponent implements OnInit {
  public campaigns: Campaign[] = [];

  constructor(
    private readonly dialog: MatDialog,
    private readonly campaignData: CampaignDataService
  ) { }

  async ngOnInit(): Promise<void> {
    this.campaigns = await this.campaignData.getAllCampaigns();
  }

  openNewCampaignDialog(): void {
    const dialog = this.dialog.open(NewCampaignComponent);

    dialog.afterClosed().subscribe(async (newCampaign: Campaign | undefined) => {
      if (newCampaign) {
        await this.campaignData.addCampaign(newCampaign);
        this.campaigns.push(newCampaign);
      }
    });
  }

}
