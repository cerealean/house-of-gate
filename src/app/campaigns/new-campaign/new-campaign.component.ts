import { Component, Inject } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { Campaign } from '../models/campaign';

@Component({
  selector: 'app-new-campaign',
  templateUrl: './new-campaign.component.html',
  styleUrls: ['./new-campaign.component.scss']
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
