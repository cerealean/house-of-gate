import { Campaign } from "src/app/campaigns/models/campaign";
import { Abilities, CharacterAbilities } from "src/app/data/static/abilities";
import { abilitiesToSkillsMapping, CharacterSkills, Skills } from "src/app/data/static/skills";

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
  proficiencies: CharacterProficiencies;
  inspiration: number;

  campaignIds: number[];
  campaigns: Campaign[];

  abilityScores: CharacterAbilities<number>;
  abilityModifiers: CharacterAbilities<number>;
  proficiencyBonus: number;
  passivePerception: number;

  getSkills(): CharacterSkills<number>;
}

type CharacterProficiencies = {
  savingThrows: Record<Abilities, boolean>,
  skills: Record<Skills, boolean>
};

export class Character implements ICharacter {
  id?: number | undefined;
  name!: string;
  race?: string | undefined;
  class?: string | undefined;
  created = new Date();
  image?: File | undefined;
  campaignIds: number[] = [];
  campaigns: Campaign[] = [];
  level = 1;
  maxHealth = 10;
  currentHealth = 10;
  tempHealth = 0;
  armorClass = 10;
  speed = 30;
  inspiration = 0;
  abilityScores: CharacterAbilities<number> = {
    strength: 8,
    dexterity: 8,
    constitution: 8,
    intelligence: 8,
    wisdom: 8,
    charisma: 8
  };
  proficiencies: CharacterProficiencies = {
    savingThrows: {
      strength: false,
      charisma: false,
      constitution: false,
      dexterity: false,
      intelligence: false,
      wisdom: false
    },
    skills: {
      acrobatics: false,
      animalHandling: false,
      arcana: false,
      athletics: false,
      deception: false,
      history: false,
      insight: false,
      intimidation: false,
      investigation: false,
      medicine: false,
      nature: false,
      perception: false,
      performance: false,
      persuasion: false,
      religion: false,
      sleightOfHand: false,
      stealth: false,
      survival: false
    }
  };
  // skills: CharacterSkillsList = this.generateNewSkillsList();

  get abilityModifiers(): CharacterAbilities<number> {
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

  get passivePerception(): number {
    const isProficient = this.proficiencies.skills.perception;
    let score = 10 + this.abilityModifiers.wisdom;

    if(isProficient) {
      score += this.proficiencyBonus;
    }

    return score;
  }

  public getSkills(): CharacterSkills<number> {
    return {
      athletics: this.getSkillScore('athletics'),
      acrobatics: this.getSkillScore('acrobatics'),
      sleightOfHand: this.getSkillScore('sleightOfHand'),
      stealth: this.getSkillScore('stealth'),
      arcana: this.getSkillScore('arcana'),
      history: this.getSkillScore('history'),
      investigation: this.getSkillScore('investigation'),
      nature: this.getSkillScore('nature'),
      religion: this.getSkillScore('religion'),
      animalHandling: this.getSkillScore('animalHandling'),
      insight: this.getSkillScore('insight'),
      medicine: this.getSkillScore('medicine'),
      perception: this.getSkillScore('perception'),
      survival: this.getSkillScore('survival'),
      deception: this.getSkillScore('deception'),
      intimidation: this.getSkillScore('intimidation'),
      performance: this.getSkillScore('performance'),
      persuasion: this.getSkillScore('persuasion')
    };
  }

  private getSkillScore(skill: Skills): number {
    const isProficient = this.proficiencies.skills[skill];
    const abilityScore = abilitiesToSkillsMapping.get(skill)!;
    let score = this.abilityScores[abilityScore];
    if(isProficient) {
      score += this.proficiencyBonus;
    }

    return score;
  }

  private getModifierFromScore(score: number): number {
    return Math.floor((score - 10) / 2);
  }

  // private generateNewSkillsList(): CharacterSkillsList {
  //   return {} as CharacterSkillsList;
  //   return {
  //     athletics: {
  //       proficient: false,
  //       modifier: () => this.getSkillModifier(this.skills.athletics, this.abilityScores.strength)
  //     },
  //     acrobatics: {
  //       proficient: false,
  //       modifier: () => this.getSkillModifier(this.skills.acrobatics, this.abilityScores.dexterity)
  //     },
  //     sleightOfHand: {
  //       proficient: false,
  //       modifier: () => this.getSkillModifier(this.skills.sleightOfHand, this.abilityScores.dexterity)
  //     },
  //     stealth: {
  //       proficient: false,
  //       modifier: () => this.getSkillModifier(this.skills.stealth, this.abilityScores.dexterity)
  //     },
  //     arcana: {
  //       proficient: false,
  //       modifier: () => this.getSkillModifier(this.skills.arcana, this.abilityScores.intelligence)
  //     },
  //     history: {
  //       proficient: false,
  //       modifier: () => this.getSkillModifier(this.skills.history, this.abilityScores.intelligence)
  //     },
  //     investigation: {
  //       proficient: false,
  //       modifier: () => this.getSkillModifier(this.skills.investigation, this.abilityScores.intelligence)
  //     },
  //     nature: {
  //       proficient: false,
  //       modifier: () => this.getSkillModifier(this.skills.nature, this.abilityScores.intelligence)
  //     },
  //     religion: {
  //       proficient: false,
  //       modifier: () => this.getSkillModifier(this.skills.religion, this.abilityScores.intelligence)
  //     },
  //     animalHandling: {
  //       proficient: false,
  //       modifier: () => this.getSkillModifier(this.skills.animalHandling, this.abilityScores.wisdom)
  //     },
  //     insight: {
  //       proficient: false,
  //       modifier: () => this.getSkillModifier(this.skills.insight, this.abilityScores.wisdom)
  //     },
  //     medicine: {
  //       proficient: false,
  //       modifier: () => this.getSkillModifier(this.skills.medicine, this.abilityScores.wisdom)
  //     },
  //     perception: {
  //       proficient: false,
  //       modifier: () => this.getSkillModifier(this.skills.perception, this.abilityScores.wisdom)
  //     },
  //     survival: {
  //       proficient: false,
  //       modifier: () => this.getSkillModifier(this.skills.survival, this.abilityScores.wisdom)
  //     },
  //     deception: {
  //       proficient: false,
  //       modifier: () => this.getSkillModifier(this.skills.deception, this.abilityScores.charisma)
  //     },
  //     intimidation: {
  //       proficient: false,
  //       modifier: () => this.getSkillModifier(this.skills.intimidation, this.abilityScores.charisma)
  //     },
  //     performance: {
  //       proficient: false,
  //       modifier: () => this.getSkillModifier(this.skills.performance, this.abilityScores.charisma)
  //     },
  //     persuasion: {
  //       proficient: false,
  //       modifier: () => this.getSkillModifier(this.skills.persuasion, this.abilityScores.charisma)
  //     },
  //   };
  // }

  // private getSkillModifier(skill: CharacterSkill, abilityModifier: number) {
  //   return skill.proficient ? abilityModifier + this.proficiencyBonus : abilityModifier;
  // }
}

// export interface CharacterSkill {
//   modifier: () => number;
//   proficient: boolean;
// }
