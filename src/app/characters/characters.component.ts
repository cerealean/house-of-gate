import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
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
    private sanitizer: DomSanitizer,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  public sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  openNewCharacterDialog(character?: Character): void {
    const dialog = this.dialog.open(NewCharacterComponent, {
      autoFocus: false,
      data: character
    });

    dialog.afterClosed().subscribe(async (newCharacter: Character | undefined) => {
      if (newCharacter) {
        if(character) {
        //   await this.campaignData.editCampaign(newCharacter);
        // } else {
        //   await this.campaignData.addCampaign(newCharacter);
        //   this.campaigns.push(newCharacter);
        }
      }
    });
  }

}
