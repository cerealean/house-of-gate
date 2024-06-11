import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { Encounter } from 'src/app/encounters/models/encounter';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-delete-encounter-dialog',
    templateUrl: './delete-encounter-dialog.component.html',
    styleUrls: ['./delete-encounter-dialog.component.scss'],
    standalone: true,
    imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatButton]
})
export class DeleteEncounterDialogComponent {

  constructor(
    public readonly dialogRef: MatDialogRef<DeleteEncounterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public readonly encounter: Encounter
  ) { }

}
