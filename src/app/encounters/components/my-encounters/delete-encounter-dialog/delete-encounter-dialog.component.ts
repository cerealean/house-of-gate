import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Encounter } from 'src/app/encounters/models/encounter';

@Component({
  selector: 'app-delete-encounter-dialog',
  templateUrl: './delete-encounter-dialog.component.html',
  styleUrls: ['./delete-encounter-dialog.component.scss']
})
export class DeleteEncounterDialogComponent {

  constructor(
    public readonly dialogRef: MatDialogRef<DeleteEncounterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public readonly encounter: Encounter
  ) { }

}
