import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CharacterDataService } from 'src/app/data/services/characters/character-data.service';
import { Skills } from 'src/app/data/static/skills';
import { DamageCalculatorModalComponent, DamageCalculatorResult } from '../damage-calculator-modal/damage-calculator-modal.component';
import { Character } from '../models/character';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.scss']
})
export class CharacterSheetComponent implements OnInit, OnDestroy {
  public character?: Character;
  public loading = true;

  public proposedNewSpeed = 30;
  public proposedNewArmorClass = 10;
  public proposedNewName = '';
  public proposedNewStrength = 10;
  public proposedNewDexterity = 10;
  public proposedNewWisdom = 10;
  public proposedNewIntelligence = 10;
  public proposedNewCharisma = 10;
  public proposedNewConstitution = 10;

  private imageUrls = new Map<File, { url: string, safeUrl: SafeUrl }>();

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
      if(!this.character) {
        this.loading = false;
        return;
      }
      if(!this.character.proficiencies) {
        this.character.proficiencies = new Character().proficiencies;
      }
      if(!this.character.abilityScores) {
        this.character.abilityScores = new Character().abilityScores;
      }
      if(this.character.inspiration === undefined) {
        this.character.inspiration = 0;
      }
      this.proposedNewSpeed = this.character!.speed;
      this.proposedNewArmorClass = this.character!.armorClass;
      this.proposedNewName = this.character!.name;
      this.proposedNewStrength = this.character!.abilityScores.strength;
      this.proposedNewDexterity = this.character!.abilityScores.dexterity;
      this.proposedNewConstitution = this.character!.abilityScores.constitution;
      this.proposedNewWisdom = this.character!.abilityScores.wisdom;
      this.proposedNewIntelligence = this.character!.abilityScores.intelligence;
      this.proposedNewCharisma = this.character!.abilityScores.charisma;
    }
    this.loading = false;
  }

  ngOnDestroy(): void {
    this.imageUrls.forEach(fileInfo => {
      if (fileInfo?.url) {
        console.log('safe url', fileInfo);
        URL.revokeObjectURL(fileInfo.url as any);
      }
    });
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

  public getHealthPercentage(): number {
    return Math.ceil((this.character!.currentHealth / this.character!.maxHealth) * 100);
  }

  public openDamageCalculator(): void {
    const dlg = this.dialog.open(DamageCalculatorModalComponent, {
      width: '300px'
    });
    dlg.afterClosed().subscribe(async val => {
      if (!val) {
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

  public async toggleSkillProficiency(ability: Skills) {
    this.character!.proficiencies.skills[ability] = !this.character!.proficiencies.skills[ability];
    await this.saveCharacter();
  }

  public async changeInspiration(amount: number): Promise<void> {
    if (!this.character!.inspiration) {
      this.character!.inspiration = 0;
    }
    this.character!.inspiration += amount;
    await this.saveCharacter();
  }

  public async changeCharacterImage($event: Event): Promise<void> {
    const element = $event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if (file) {
      const imageUrl = this.imageUrls.get(file)?.url;
      this.character!.image = file;
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
      await this.saveCharacter();
    }
  }

  public async saveCharacter(): Promise<void> {
    if (!this.character) {
      return;
    }
    await this.characterData.editCharacter(this.character);
  }

  private damageCharacter(amount: number) {
    if (!this.character) {
      return;
    }
    if (this.character.tempHealth > 0) {
      if (this.character.tempHealth >= amount) {
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
    if (!this.character) {
      return;
    }
    const currentHealthAfterHealing = this.character.currentHealth + amount;
    if (currentHealthAfterHealing > this.character.maxHealth) {
      this.character.currentHealth = this.character.maxHealth;
    } else if (currentHealthAfterHealing < 1) {
      this.character.currentHealth = 1;
    } else {
      this.character.currentHealth = currentHealthAfterHealing;
    }
  }

  private giveTempHealth(amount: number) {
    if (!this.character) {
      return;
    }
    this.character.tempHealth = amount;
  }

}
