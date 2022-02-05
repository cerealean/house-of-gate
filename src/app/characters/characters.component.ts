import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Campaign } from '../campaigns/models/campaign';
import { CampaignDataService } from '../data/services/campaigns/campaign-data.service';
import { CharacterDataService } from '../data/services/characters/character-data.service';
import { Character } from './models/character';
import { NewCharacterComponent } from './new-character/new-character.component';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit, OnDestroy {
  public characters: Character[] = [];
  public filteredCharacters: Character[] = [];
  public selectedCharacter?: Character;

  public campaigns: Campaign[] = [];
  public selectedCampaigns: Campaign[] = [];

  constructor(
    private readonly sanitizer: DomSanitizer,
    private readonly dialog: MatDialog,
    private readonly characterData: CharacterDataService,
    private readonly campaignData: CampaignDataService
  ) { }

  async ngOnInit(): Promise<void> {
    this.campaigns = await this.campaignData.getAllCampaigns();
    this.selectedCampaigns = this.campaigns.slice();

    const existingCharacters = await this.characterData.getAllCharacters();
    if (existingCharacters.length > 0) {
      this.characters = existingCharacters.slice();
      this.filteredCharacters = this.characters.slice(); // TODO: Fix filtering
      // this.updateFilter();
    }
  }

  ngOnDestroy(): void {
      this.characters.forEach(c => c?.unsetImageSource());
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
          this.updateFilter();
        }
      }
    });
  }

  public updateFilter(): void {
    const selectedCampaignIds = this.selectedCampaigns.map(sc => sc.id);
    this.filteredCharacters = this.characters.slice(); // this.characters.filter(character => character.campaignIds.some(ci => selectedCampaignIds.includes(ci)));
  }

}
