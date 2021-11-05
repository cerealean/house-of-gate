import { crToExpMap } from "src/app/data/cr-to-exp";
import { EncounterRequest } from "./encounter-request";
import { Monster } from "../../monsters/models/monster";

export class Encounter {
  public readonly dateGenerated = new Date();

  constructor(
    public readonly monsters: Monster[],
    public readonly request: EncounterRequest
  ) { }

  public getTotalApproximateExp(): number {
    return this.monsters.map(m => crToExpMap.get(m.cr)!).reduce((a, b) => a + b, 0);
  }
}
