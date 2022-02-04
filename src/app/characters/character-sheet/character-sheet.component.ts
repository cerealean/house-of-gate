import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CharacterDataService } from 'src/app/data/services/characters/character-data.service';
import { DamageCalculatorModalComponent, DamageCalculatorResult } from '../damage-calculator-modal/damage-calculator-modal.component';
import { Character } from '../models/character';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.scss']
})
export class CharacterSheetComponent implements OnInit, OnDestroy {
  // @HostBinding('max-width')
  // private readonly maxWidth = '375px';

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
    dlg.afterClosed().subscribe(async val => {
      if(!val) {
        return;
      }
      const result = val as DamageCalculatorResult;
      switch (result.type) {
        case 'damage':
          this.damageCharacter(result.amount);
          break;
        case 'heal':
          this.healCharacter(result.amount);
          break;
        case 'temp':
          this.giveTempHealth(result.amount);
          break;
      }
      await this.saveCharacter();
    });
  }

  private async saveCharacter(): Promise<void> {
    if(!this.character) {
      return;
    }
    await this.characterData.editCharacter(this.character);
  }

  private damageCharacter(amount: number) {
    if(!this.character) {
      return;
    }
    if(this.character.tempHealth > 0) {
      if(this.character.tempHealth >= amount) {
        this.character.tempHealth -= amount;
      } else {
        const remainingAmountAfterTempHealth = amount - this.character.tempHealth;
        this.character.tempHealth = 0;
        this.character.currentHealth -= remainingAmountAfterTempHealth;
      }
    } else {
      this.character!.currentHealth -= amount;
    }
  }

  private healCharacter(amount: number) {
    if(!this.character) {
      return;
    }
    const currentHealthAfterHealing = this.character.currentHealth + amount;
    if(currentHealthAfterHealing > this.character.maxHealth) {
      this.character.currentHealth = this.character.maxHealth;
    } else if(currentHealthAfterHealing < 1) {
      this.character.currentHealth = 1;
    } else {
      this.character.currentHealth = currentHealthAfterHealing;
    }
  }

  private giveTempHealth(amount: number) {
    if(!this.character) {
      return;
    }
    this.character.tempHealth = amount;
  }

}
