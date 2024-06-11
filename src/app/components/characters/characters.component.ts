import { DatePipe, NgFor, NgIf } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatButton } from "@angular/material/button";
import { MatCard } from "@angular/material/card";
import { MatDialog } from "@angular/material/dialog";
import { MatDivider } from "@angular/material/divider";
import { MatIcon } from "@angular/material/icon";
import {
  MatList,
  MatListItem,
  MatListItemAvatar,
  MatListItemLine,
  MatListItemTitle,
} from "@angular/material/list";
import { MatMenu, MatMenuItem, MatMenuTrigger } from "@angular/material/menu";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { RouterLink } from "@angular/router";
import { CampaignDataService } from "src/app/data/services/campaigns/campaign-data.service";
import { CharacterDataService } from "src/app/data/services/characters/character-data.service";
import { Campaign } from "../campaigns/models/campaign";
import { Character } from "./models/character";
import { NewCharacterComponent } from "./new-character/new-character.component";

@Component({
  selector: "app-characters",
  templateUrl: "./characters.component.html",
  styleUrls: ["./characters.component.scss"],
  standalone: true,
  imports: [
    MatCard,
    MatButton,
    MatDivider,
    NgIf,
    MatList,
    NgFor,
    MatListItem,
    MatMenuTrigger,
    MatListItemAvatar,
    MatIcon,
    MatListItemTitle,
    MatListItemLine,
    MatMenu,
    MatMenuItem,
    RouterLink,
    DatePipe,
  ],
})
export class CharactersComponent implements OnInit, OnDestroy {
  public characters: Character[] = [];
  public filteredCharacters: Character[] = [];
  public selectedCharacter?: Character;

  public campaigns: Campaign[] = [];
  public selectedCampaigns: Campaign[] = [];

  private imageUrls = new Map<File, { url: string; safeUrl: SafeUrl }>();

  constructor(
    private readonly sanitizer: DomSanitizer,
    private readonly dialog: MatDialog,
    private readonly characterData: CharacterDataService,
    private readonly campaignData: CampaignDataService
  ) {}

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
        console.log("safe url", fileInfo);
        URL.revokeObjectURL(fileInfo.url as any);
      }
    });
  }

  public openNewCharacterDialog(character?: Character): void {
    const dialog = this.dialog.open(NewCharacterComponent, {
      autoFocus: false,
      data: character,
    });

    dialog
      .afterClosed()
      .subscribe(async (newCharacter: Character | undefined) => {
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
      return "";
    } else if (this.imageUrls.has(image)) {
      return this.imageUrls.get(image)?.safeUrl || "";
    } else {
      const url = URL.createObjectURL(image);
      const safeUrl = this.sanitizer.bypassSecurityTrustUrl(url);
      this.imageUrls.set(image, { url, safeUrl });

      return safeUrl;
    }
  }
}
