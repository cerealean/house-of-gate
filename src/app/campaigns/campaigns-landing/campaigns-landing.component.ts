import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { DomSanitizer } from '@angular/platform-browser';
import { CampaignDataService } from 'src/app/data/services/campaigns/campaign-data.service';
import { EncounterDataService } from 'src/app/data/services/encounters/encounter-data.service';
import { DeleteCampaignDialogComponent } from '../delete-campaign-dialog/delete-campaign-dialog.component';
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
    private readonly encounterData: EncounterDataService,
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

  async openDeleteCampaignDialog(campaign: Campaign): Promise<void> {
    const dialog = this.dialog.open(DeleteCampaignDialogComponent, { autoFocus: false, data: campaign });
    dialog.afterClosed().subscribe(async (shouldDelete: boolean) => {
      if(shouldDelete === true) {
        const encounterIds = campaign.encounters.map(e => e.id!);
        await this.encounterData.deleteEncounters(encounterIds);
        await this.campaignData.deleteCampaign(campaign.id!);
        this.campaigns = this.campaigns.filter(c => c != campaign);
      }
    });
  }

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

}
