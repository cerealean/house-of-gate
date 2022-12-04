import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Campaign } from '../models/campaign';

@Component({
  selector: 'app-delete-campaign-dialog',
  templateUrl: './delete-campaign-dialog.component.html',
  styleUrls: ['./delete-campaign-dialog.component.scss']
})
export class DeleteCampaignDialogComponent {

  constructor(
    public readonly dialogRef: MatDialogRef<DeleteCampaignDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public readonly providedCampaign: Campaign
  ) { }

}
