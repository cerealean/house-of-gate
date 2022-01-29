import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { CharacterDataService } from '../data/services/characters/character-data.service';
import { Character } from './models/character';
import { NewCharacterComponent } from './new-character/new-character.component';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  public characters: Character[] = [];
  public selectedCharacter?: Character;

  constructor(
    private readonly sanitizer: DomSanitizer,
    private readonly dialog: MatDialog,
    private readonly characterData: CharacterDataService
  ) { }

  async ngOnInit(): Promise<void> {
    const existingCharacters = await this.characterData.getAllCharacters();

    if (existingCharacters.length > 0) {
      this.characters = existingCharacters.slice();
    }
  }

  public sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  public openNewCharacterDialog(character?: Character): void {
    const dialog = this.dialog.open(NewCharacterComponent, {
      autoFocus: false,
      data: character
    });

    dialog.afterClosed().subscribe(async (newCharacter: Character | undefined) => {
      if (newCharacter) {
        const isEditing = !!character;
        if (isEditing) {
          await this.characterData.editCharacter(newCharacter);
        } else {
          await this.characterData.addCharacter(newCharacter);
          this.characters.push(newCharacter);
        }
      }
    });
  }

}
