import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
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

  private imageUrls = new Map<File, { url: string, safeUrl: SafeUrl }>();

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
      this.updateFilter();
    }
  }

  ngOnDestroy(): void {
    this.imageUrls.forEach(fileInfo => {
      if (fileInfo?.url) {
        console.log('safe url', fileInfo);
        URL.revokeObjectURL(fileInfo.url as any);
      }
    });
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

  public getImageUrl(image: File | undefined): SafeUrl {
    if (!image) {
      return '';
    } else if (this.imageUrls.has(image)) {
      return this.imageUrls.get(image)?.safeUrl || '';
    } else {
      const url = URL.createObjectURL(image);
      const safeUrl = this.sanitizer.bypassSecurityTrustUrl(url);
      this.imageUrls.set(image, { url, safeUrl });

      return safeUrl;
    }
  }

}
