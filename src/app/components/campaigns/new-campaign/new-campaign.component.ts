import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { Campaign } from '../models/campaign';
import { MatButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';

import { FormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatLabel } from '@angular/material/form-field';

@Component({
    selector: 'app-new-campaign',
    templateUrl: './new-campaign.component.html',
    styleUrls: ['./new-campaign.component.scss'],
    standalone: true,
    imports: [MatDialogTitle, MatDialogContent, MatFormField, MatLabel, MatInput, FormsModule, MatDivider, MatDialogActions, MatButton, MatDialogClose]
})
export class NewCampaignComponent {
  public readonly isEditingCurrentCampaign: boolean;
  public readonly campaign: Campaign;

  get isValid(): boolean {
    return !!this.campaign.name
      && this.campaign.name.length > 0
      && this.campaign.name.length <= 100;
  }

  constructor(
    public dialogRef: MatDialogRef<NewCampaignComponent>,
    @Inject(MAT_DIALOG_DATA) public readonly providedCampaign: Campaign
  ) {
    this.isEditingCurrentCampaign = !!providedCampaign;
    this.campaign = this.isEditingCurrentCampaign
      ? providedCampaign
      : new Campaign();
  }

  public onFileChange($event: Event): void {
    const element = $event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if (file) {
      this.campaign.image = file;
    }
  }

}
