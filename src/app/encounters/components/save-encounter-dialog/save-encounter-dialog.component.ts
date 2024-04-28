import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { Campaign } from 'src/app/campaigns/models/campaign';
import { CampaignDataService } from 'src/app/data/services/campaigns/campaign-data.service';
import { EncounterDataService } from 'src/app/data/services/encounters/encounter-data.service';
import { Encounter, GeneratedEncounter } from '../../models/encounter';
import { MatButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'app-save-encounter-dialog',
    templateUrl: './save-encounter-dialog.component.html',
    styleUrls: ['./save-encounter-dialog.component.scss'],
    standalone: true,
    imports: [MatDialogTitle, MatDialogContent, NgIf, MatFormField, MatLabel, MatSelect, NgFor, MatOption, MatInput, FormsModule, RouterLink, MatDivider, MatDialogActions, MatButton]
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
    if(this.campaigns.length === 1) {
      this.selectedCampaign = this.campaigns[0];
    }
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
