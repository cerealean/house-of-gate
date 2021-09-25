import { metaInfo } from "../../data/meta-info";
import { EncounterRequest } from "./encounter-request";
import { Monster } from "./monster";

export interface EncounterMonsterInfo {
  monster: Monster;
  quantity: number;
}

export class Encounter {
  public readonly dateGenerated = new Date();

  constructor(
    public readonly encounters: EncounterMonsterInfo[],
    public readonly request: EncounterRequest,
    public readonly template: number[]
  ){ }

  public getTotalApproximateExp(): number {
    return this.encounters.map(m => metaInfo.crList[m.monster.cr].exp * m.quantity)
            .reduce((a, b) => a + b, 0);
  }
}
