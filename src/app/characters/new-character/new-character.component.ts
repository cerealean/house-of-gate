import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Character } from '../models/character';

@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.scss']
})
export class NewCharacterComponent {
  public readonly isEditingCurrentCharacter: boolean;
  public readonly character: Character;

  get isValid(): boolean {
    return !!this.character.name
      && this.character.name.length > 0
      && this.character.name.length <= 100;
  }

  constructor(
    public dialogRef: MatDialogRef<NewCharacterComponent>,
    @Inject(MAT_DIALOG_DATA) public readonly providedCampaign: Character
  ) {
    this.isEditingCurrentCharacter = !!providedCampaign;
    this.character = this.isEditingCurrentCharacter
      ? providedCampaign
      : new Character();
  }

  public onFileChange($event: Event): void {
    const element = $event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if (file) {
      this.character.image = file;
    }
  }
}
