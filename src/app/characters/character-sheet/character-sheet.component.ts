import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CharacterDataService } from 'src/app/data/services/characters/character-data.service';
import { Character } from '../models/character';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.scss']
})
export class CharacterSheetComponent implements OnInit, OnDestroy {
  public character?: Character;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly characterData: CharacterDataService,
    private readonly sanitizer: DomSanitizer
  ) { }

  async ngOnInit(): Promise<void> {
    const characterId = this.route.snapshot.paramMap.get('character-id');
    if (characterId) {
      this.character = await this.characterData.getCharacterById(+characterId);
    }
  }

  ngOnDestroy(): void {
      this.character?.unsetImageSource();
  }

  public safeImage(image: string) {
    return this.sanitizer.bypassSecurityTrustUrl(image);
  }

  public getHealthPercentage(): number {
    return Math.ceil((this.character!.currentHealth / this.character!.maxHealth) * 100);
  }

}
