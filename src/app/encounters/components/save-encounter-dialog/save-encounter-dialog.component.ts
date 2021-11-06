import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Campaign } from 'src/app/campaigns/models/campaign';
import { CampaignDataService } from 'src/app/data/services/campaigns/campaign-data.service';
import { EncounterDataService } from 'src/app/data/services/encounters/encounter-data.service';
import { Encounter, GeneratedEncounter } from '../../models/encounter';

@Component({
  selector: 'app-save-encounter-dialog',
  templateUrl: './save-encounter-dialog.component.html',
  styleUrls: ['./save-encounter-dialog.component.scss']
})
export class SaveEncounterDialogComponent implements OnInit {
  public campaigns: Campaign[] = [];
  public selectedCampaign?: Campaign;
  public encounterName?: string;

  get isValid(): boolean {
    return !!this.selectedCampaign
      && !!this.encounterName?.length;
  }

  constructor(
    private readonly campaignData: CampaignDataService,
    private readonly encounterData: EncounterDataService,
    public readonly dialogRef: MatDialogRef<SaveEncounterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public readonly encounter: GeneratedEncounter
  ) { }

  async ngOnInit(): Promise<void> {
    this.campaigns = await this.campaignData.getAllCampaigns();
  }

  async saveToCampaign(): Promise<void> {
    const newEncounter = new Encounter();
    newEncounter.campaignId = this.selectedCampaign?.id;
    newEncounter.monsterIds = this.encounter.monsters.map(m => m.id);
    newEncounter.name = this.encounterName;

    await this.encounterData.saveEncounter(newEncounter);
    this.dialogRef.close();
  }

}
