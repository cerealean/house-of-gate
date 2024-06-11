import { Component, Inject } from "@angular/core";
import { MatButton } from "@angular/material/button";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from "@angular/material/dialog";
import type { Encounter } from "../../../models/encounter";

@Component({
  selector: "app-delete-encounter-dialog",
  templateUrl: "./delete-encounter-dialog.component.html",
  styleUrls: ["./delete-encounter-dialog.component.scss"],
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatButton],
})
export class DeleteEncounterDialogComponent {
  constructor(
    public readonly dialogRef: MatDialogRef<DeleteEncounterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public readonly encounter: Encounter
  ) {}
}
