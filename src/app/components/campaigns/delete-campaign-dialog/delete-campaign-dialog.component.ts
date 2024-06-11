import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { Campaign } from '../models/campaign';
import { MatButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';


@Component({
    selector: 'app-delete-campaign-dialog',
    templateUrl: './delete-campaign-dialog.component.html',
    styleUrls: ['./delete-campaign-dialog.component.scss'],
    standalone: true,
    imports: [MatDialogTitle, MatDialogContent, MatDivider, MatDialogActions, MatButton, MatDialogClose]
})
export class DeleteCampaignDialogComponent {

  constructor(
    public readonly dialogRef: MatDialogRef<DeleteCampaignDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public readonly providedCampaign: Campaign
  ) { }

}
