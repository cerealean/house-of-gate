import { Campaign } from "src/app/campaigns/models/campaign";

export interface ICharacter {
  id?: number;
  name: string;
  race?: string;
  class?: string;
  created: Date;
  image?: Blob;
  level: number;
  maxHealth: number;
  currentHealth: number;
  armorClass: number;
  initiative: number;
  speed: number;

  campaignIds: number[];
  campaigns: Campaign[];

  abilityScores: CharacterAbilities;
  abilityModifiers: CharacterAbilities;
  proficiencyBonus: number;
}

export class Character implements ICharacter {
  id?: number | undefined;
  name!: string;
  race?: string | undefined;
  class?: string | undefined;
  created = new Date();
  image?: Blob | undefined;
  campaignIds: number[] = [];
  campaigns: Campaign[] = [];
  level = 1;
  maxHealth = 10;
  currentHealth = 10;
  armorClass = 10;
  speed = 30;
  abilityScores: CharacterAbilities = {
    strength: 8,
    dexterity: 8,
    constitution: 8,
    intelligence: 8,
    wisdom: 8,
    charisma: 8
  };

  private imageUrl: string | undefined;

  get abilityModifiers(): CharacterAbilities {
    return {
      strength: this.getModifierFromScore(this.abilityScores.strength),
      dexterity: this.getModifierFromScore(this.abilityScores.dexterity),
      constitution: this.getModifierFromScore(this.abilityScores.constitution),
      intelligence: this.getModifierFromScore(this.abilityScores.intelligence),
      wisdom: this.getModifierFromScore(this.abilityScores.wisdom),
      charisma: this.getModifierFromScore(this.abilityScores.charisma),
    };
  }

  get initiative(): number {
    return this.abilityModifiers.dexterity;
  }

  get proficiencyBonus(): number {
    if (!this.level) {
      return 0;
    }

    return Math.floor((2 + (this.level - 1)) / 4);
  }

  public getImageSource(): string | undefined {
    if (this.image) {
      this.imageUrl = URL.createObjectURL(this.image);
    }

    return this.imageUrl;
  }

  public unsetImageSource(): void {
    if (this.imageUrl) {
      URL.revokeObjectURL(this.imageUrl);
    }
  }

  private getModifierFromScore(score: number): number {
    return Math.floor((score - 10) / 2);
  }
}

export interface CharacterAbilities {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}
