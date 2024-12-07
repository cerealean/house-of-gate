import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { Campaign } from 'src/app/campaigns/models/campaign';
import { CampaignDataService } from 'src/app/data/services/campaigns/campaign-data.service';
import { Character } from '../models/character';
import { MatButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { FlexModule } from '@ngbracket/ngx-layout/flex';

@Component({
    selector: 'app-new-character',
    templateUrl: './new-character.component.html',
    styleUrls: ['./new-character.component.scss'],
    imports: [MatDialogTitle, MatDialogContent, FlexModule, MatFormField, MatLabel, MatInput, FormsModule, MatError, NgIf, MatSelect, NgFor, MatOption, MatDivider, MatDialogActions, MatButton, MatDialogClose]
})
export class NewCharacterComponent implements OnInit {
  public readonly isEditingCurrentCharacter: boolean;
  public readonly character: Character;

  public campaigns: Campaign[] = [];

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
    @Inject(MAT_DIALOG_DATA) public readonly providedCharacter: Character,
    private readonly campaignData: CampaignDataService
  ) {
    this.isEditingCurrentCharacter = !!providedCharacter;
    this.character = this.isEditingCurrentCharacter
      ? providedCharacter
      : new Character();
  }

  async ngOnInit(): Promise<void> {
    this.campaigns = await this.campaignData.getAllCampaigns();
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
