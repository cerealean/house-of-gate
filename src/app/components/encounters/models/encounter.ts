import { crToExpMap } from "src/app/data/static/cr-to-exp";
import type { Monster } from "../../monsters/models/monster";
import { EncounterRequest } from "./encounter-request";

export class GeneratedEncounter {
  public readonly dateGenerated = new Date();

  constructor(
    public readonly monsters: Monster[],
    public readonly request: EncounterRequest
  ) {}

  public getTotalApproximateExp(): number {
    return this.monsters
      .map(m => crToExpMap.get(m.cr)!)
      .reduce((a, b) => a + b, 0);
  }
}

export class Encounter {
  public id?: number;
  public name? = "";
  public date = new Date();
  public campaignId?: number;
  public monsterIds: string[] = [];
  public monsters: Monster[] = [];
}
