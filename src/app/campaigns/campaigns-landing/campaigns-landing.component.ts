import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { DomSanitizer } from '@angular/platform-browser';
import { CampaignDataService } from 'src/app/data/services/campaigns/campaign-data.service';
import { Campaign } from '../models/campaign';
import { NewCampaignComponent } from '../new-campaign/new-campaign.component';

@Component({
  selector: 'app-campaigns-landing',
  templateUrl: './campaigns-landing.component.html',
  styleUrls: ['./campaigns-landing.component.scss']
})
export class CampaignsLandingComponent implements OnInit, OnDestroy {
  public campaigns: Campaign[] = [];
  public selectedCampaign?: Campaign;

  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  constructor(
    private readonly dialog: MatDialog,
    private readonly campaignData: CampaignDataService,
    private readonly sanitizer: DomSanitizer
  ) { }

  async ngOnInit(): Promise<void> {
    this.campaigns = await this.campaignData.getAllCampaigns();
  }

  ngOnDestroy(): void {
    this.campaigns.forEach(c => c.unsetImageSource());
  }

  openNewCampaignDialog(campaign?: Campaign): void {
    const dialog = this.dialog.open(NewCampaignComponent, {
      autoFocus: false,
      data: campaign
    });

    dialog.afterClosed().subscribe(async (newCampaign: Campaign | undefined) => {
      if (newCampaign) {
        if(campaign) {
          await this.campaignData.editCampaign(newCampaign);
        } else {
          await this.campaignData.addCampaign(newCampaign);
          this.campaigns.push(newCampaign);
        }
      }
    });
  }

  openCampaignEditMenu(campaign: Campaign): void {
    this.trigger.openMenu();
  }

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

}
