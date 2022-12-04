import { Component, OnInit } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { Router } from '@angular/router';
import { Campaign } from 'src/app/campaigns/models/campaign';
import { CampaignDataService } from 'src/app/data/services/campaigns/campaign-data.service';
import { EncounterDataService } from 'src/app/data/services/encounters/encounter-data.service';
import { Encounter } from '../../models/encounter';
import { DeleteEncounterDialogComponent } from './delete-encounter-dialog/delete-encounter-dialog.component';

@Component({
  selector: 'app-my-encounters',
  templateUrl: './my-encounters.component.html',
  styleUrls: ['./my-encounters.component.scss']
})
export class MyEncountersComponent implements OnInit {
  public campaigns: Campaign[] = [];
  public selectedCampaign?: Campaign;
  public selectedEncounter?: Encounter;

  get hasCampaigns(): boolean {
    return !!this.campaigns && this.campaigns.length > 0;
  }

  get hasEncounters(): boolean {
    return !!this.selectedCampaign && this.selectedCampaign.encounters.length > 0;
  }

  private givenCampaignId?: number;

  constructor(
    private readonly campaignData: CampaignDataService,
    private readonly encounterData: EncounterDataService,
    private readonly dialog: MatDialog,
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

  deleteEncounter(encounter: Encounter) {
    const dialog = this.dialog.open(DeleteEncounterDialogComponent, {
      data: encounter
    });
    dialog.afterClosed().subscribe(async (shouldDelete: boolean) => {
      if(shouldDelete !== true) {
        return;
      }
      await this.encounterData.deleteEncounter(encounter.id!);
      this.selectedCampaign!.encounters = this.selectedCampaign!.encounters
        .filter(e => e != encounter);
      this.selectedEncounter = undefined;
    });
  }

}
