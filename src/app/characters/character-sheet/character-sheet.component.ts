import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CharacterDataService } from 'src/app/data/services/characters/character-data.service';
import { DamageCalculatorModalComponent } from '../damage-calculator-modal/damage-calculator-modal.component';
import { Character } from '../models/character';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.scss']
})
export class CharacterSheetComponent implements OnInit, OnDestroy {
  public character?: Character;
  public loading = true;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly characterData: CharacterDataService,
    private readonly sanitizer: DomSanitizer,
    private readonly dialog: MatDialog
  ) { }

  async ngOnInit(): Promise<void> {
    const characterId = this.route.snapshot.paramMap.get('character-id');
    if (characterId) {
      this.character = await this.characterData.getCharacterById(+characterId);
    }
    this.loading = false;
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

  public openDamageCalculator(): void {
    const dlg = this.dialog.open(DamageCalculatorModalComponent, {
      width: '300px'
    });
    dlg.afterClosed().subscribe(val => {
      console.log(val);
    });
  }

}
