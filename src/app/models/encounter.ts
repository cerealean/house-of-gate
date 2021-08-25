import { EncounterRequest } from "./encounter-request";
import { Monster } from "./monster";

export interface EncounterMonsterInfo {
  monster: Monster;
  quantity: number;
}

export class Encounter {
  public readonly dateGenerated = new Date();

  constructor(
    public encounters: EncounterMonsterInfo[],
    public request: EncounterRequest
  ){ }
}
