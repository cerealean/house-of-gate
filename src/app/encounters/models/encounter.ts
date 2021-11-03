import { crToExpMap } from "src/app/data/cr-to-exp";
import { metaInfo } from "../../data/meta-info";
import { EncounterRequest } from "./encounter-request";
import { Monster } from "../../monsters/models/monster";

export class GeneratedEncounter {
  public readonly dateGenerated = new Date();

  constructor(
    public readonly monsters: Monster[],
    public readonly request: EncounterRequest
  ) { }

  public getTotalApproximateExp(): number {
    return this.monsters.map(m => crToExpMap.get(m.cr)!).reduce((a, b) => a + b, 0);
  }
}
