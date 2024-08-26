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
  tempHealth: number;
  armorClass: number;
  initiative: number;
  speed: number;

  campaignIds: number[];
  campaigns: Campaign[];

  abilityScores: CharacterAbilities;
  abilityModifiers: CharacterAbilities;
  proficiencyBonus: number;

  skills(): CharacterSkillsList;
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
  tempHealth = 0;
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
  skillProficiencies: Record<CharacterSkills, boolean> = {
    acrobatics: false,
    animalHandling: false,
    arcana: false,
    athletics: false,
    deception: false,
    history: false,
    insight: false,
    intimidation: false,
    medicine: false,
    perception: false,
    performance: false,
    persuasion: false,
    religion: false,
    sleightOfHand: false,
    stealth: false,
    survival: false
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

  public skills(): CharacterSkillsList {
    return {
      acrobatics:
    }
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
      this.imageUrl = undefined;
    }
  }

  private getModifierFromScore(score: number): number {
    return Math.floor((score - 10) / 2);
  }

  private generateNewSkillsList(): CharacterSkillsList {
    return {
      athletics: {
        proficient: false,
        modifier: () => this.getSkillModifier(this.skills.athletics, this.abilityScores.strength)
      },
      acrobatics: {
        proficient: false,
        modifier: () => this.getSkillModifier(this.skills.acrobatics, this.abilityScores.dexterity)
      },
      sleightOfHand: {
        proficient: false,
        modifier: () => this.getSkillModifier(this.skills.sleightOfHand, this.abilityScores.dexterity)
      },
      stealth: {
        proficient: false,
        modifier: () => this.getSkillModifier(this.skills.stealth, this.abilityScores.dexterity)
      },
      arcana: {
        proficient: false,
        modifier: () => this.getSkillModifier(this.skills.arcana, this.abilityScores.intelligence)
      },
      history: {
        proficient: false,
        modifier: () => this.getSkillModifier(this.skills.history, this.abilityScores.intelligence)
      },
      investigation: {
        proficient: false,
        modifier: () => this.getSkillModifier(this.skills.investigation, this.abilityScores.intelligence)
      },
      nature: {
        proficient: false,
        modifier: () => this.getSkillModifier(this.skills.nature, this.abilityScores.intelligence)
      },
      religion: {
        proficient: false,
        modifier: () => this.getSkillModifier(this.skills.religion, this.abilityScores.intelligence)
      },
      animalHandling: {
        proficient: false,
        modifier: () => this.getSkillModifier(this.skills.animalHandling, this.abilityScores.wisdom)
      },
      insight: {
        proficient: false,
        modifier: () => this.getSkillModifier(this.skills.insight, this.abilityScores.wisdom)
      },
      medicine: {
        proficient: false,
        modifier: () => this.getSkillModifier(this.skills.medicine, this.abilityScores.wisdom)
      },
      perception: {
        proficient: false,
        modifier: () => this.getSkillModifier(this.skills.perception, this.abilityScores.wisdom)
      },
      survival: {
        proficient: false,
        modifier: () => this.getSkillModifier(this.skills.survival, this.abilityScores.wisdom)
      },
      deception: {
        proficient: false,
        modifier: () => this.getSkillModifier(this.skills.deception, this.abilityScores.charisma)
      },
      intimidation: {
        proficient: false,
        modifier: () => this.getSkillModifier(this.skills.intimidation, this.abilityScores.charisma)
      },
      performance: {
        proficient: false,
        modifier: () => this.getSkillModifier(this.skills.performance, this.abilityScores.charisma)
      },
      persuasion: {
        proficient: false,
        modifier: () => this.getSkillModifier(this.skills.persuasion, this.abilityScores.charisma)
      },
    };
  }

  private getSkillModifier(skillName: CharacterSkills): SkillDetails {
    const isProficient = this.skillProficiencies[skillName];
    // return skill.proficient ? abilityModifier + this.proficiencyBonus : abilityModifier;
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

type SkillDetails = {
  proficient: boolean;
  modifier: () => number;
};

export interface CharacterSkillsList extends Record<CharacterSkills, SkillDetails> { }

const characterSkills = [
  'acrobatics',
  'animalHandling',
  'arcana',
  'athletics',
  'deception',
  'history',
  'insight',
  'intimidation',
  'medicine',
  'perception',
  'performance',
  'persuasion',
  'religion',
  'sleightOfHand',
  'stealth',
  'survival',
] as const;

type CharacterSkills = typeof characterSkills[number];
