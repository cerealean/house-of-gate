import { Abilities } from "./abilities";

export const traitsList = [
  'flight',
  'talons',
  'wind caller',
  'darkvision'
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

interface ModifiesAbilityScore {

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


