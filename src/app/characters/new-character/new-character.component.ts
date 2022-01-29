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
      && this.character.name.length <= 100
      && this.isValueBetween1And30(this.character.level)
      && this.isValueBetween1And30(this.character.abilityScores.strength)
      && this.isValueBetween1And30(this.character.abilityScores.dexterity)
      && this.isValueBetween1And30(this.character.abilityScores.constitution)
      && this.isValueBetween1And30(this.character.abilityScores.intelligence)
      && this.isValueBetween1And30(this.character.abilityScores.wisdom)
      && this.isValueBetween1And30(this.character.abilityScores.charisma);
  }

  constructor(
    public dialogRef: MatDialogRef<NewCharacterComponent>,
    @Inject(MAT_DIALOG_DATA) public readonly providedCharacter: Character
  ) {
    this.isEditingCurrentCharacter = !!providedCharacter;
    this.character = this.isEditingCurrentCharacter
      ? providedCharacter
      : new Character();
  }

  public onFileChange($event: Event): void {
    const element = $event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if (file) {
      this.character.image = file;
    }
  }

  private isValueBetween1And30(value: number | undefined): boolean {
    return !!value
      && value >= 1
      && value <= 30;
  }
}
