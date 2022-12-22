import { Abilities } from "./abilities";
import { Conditions } from "./conditions";
import { DamageTypes } from "./damage-types";
import { Languages } from "./languages";
import { Skills } from "./skills";

export const traitsList = [
  'flight',
  'talons',
  'wind caller',
  'darkvision',
  'keen senses',
  'fey ancestry',
  'trance',
  'damage resistance',
  'languages'
] as const;

export type TraitsList = typeof traitsList[number];

abstract class Trait {
  constructor(
    public readonly name: TraitsList,
    public readonly description: string
  ) { }
}

type MovementTypes = 'flight' | 'normal' | 'burrow';
interface ModifiesMovement {
  getMovementDistance(): number;
  getMovementType(): MovementTypes;
  doesMovementIgnoreDifficultTerrain(): boolean;
}

interface ModifiesSight {
  getNormalLightDistance(): number;
  getDimLightDistance(): number;
  getDarknessDistance(): number;
  getBlindSightDistance(): number;
}

interface AddsSkillProficiencies {
  getAddedProficiencies(): Skills[];
}

interface AddsAdvantageAgainstCondition {
  getConditionsWhereIHaveAdvantage(): Conditions[];
}

interface AddsResistanceToDamageType {
  getDamageTypesWhereIHaveResistance(): DamageTypes[];
}

interface AddsLanguages {
  getLanguages(): Languages[];
}

class DarkvisionTrait extends Trait implements ModifiesSight {
  constructor(
    private readonly dimDistance: number,
    private readonly darknessDistance: number
  ) {
    super('darkvision', `You can see in dim light within ${dimDistance} feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.`)
  }
  getNormalLightDistance(): number {
    return 0;
  }
  getDimLightDistance(): number {
    return this.dimDistance;
  }
  getDarknessDistance(): number {
    return this.darknessDistance;
  }
  getBlindSightDistance(): number {
    return 0;
  }
}

class KeenSensesTrait extends Trait implements AddsSkillProficiencies {
  constructor() {
    super('keen senses', 'You have proficiency in the Perception skill.')
  }
  getAddedProficiencies(): Skills[] {
    return ['perception'];
  }
}

class FeyAncestryTrait extends Trait implements AddsAdvantageAgainstCondition {
  constructor() {
    super('fey ancestry', "You have advantage on Saving Throws against being Charmed, and magic can't put you to sleep.")
  }

  getConditionsWhereIHaveAdvantage(): Conditions[] {
    return ['charmed'];
  }
}

class TranceTrait extends Trait {
  constructor() {
    super('trance', "You don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After Resting in this way, you gain the same benefit that a human does from 8 hours of sleep.")
  }
}

class DamageResistanceTrait extends Trait implements AddsResistanceToDamageType {
  constructor(
    private readonly damageTypesIAmResistantTo: DamageTypes[]
  ) {
    super('damage resistance', `You have resistance to ${damageTypesIAmResistantTo.join(',')}.`)
  }

  getDamageTypesWhereIHaveResistance(): DamageTypes[] {
    return this.damageTypesIAmResistantTo;
  }
}

class LanguagesTrait extends Trait implements AddsLanguages {
  constructor(
    private readonly languagesIKnow: Languages[]
  ) {
    super('languages', `You can speak, read, and write: ${languagesIKnow.join(',')}`);
  }

  getLanguages(): Languages[] {
    return this.languagesIKnow;
  }
}
