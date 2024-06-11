import { Injectable } from "@angular/core";
import { type Encounter } from "src/app/components/encounters/models/encounter";
import { DatabaseService } from "../database.service";

@Injectable({
  providedIn: "any",
})
export class EncounterDataService {
  constructor(private readonly db: DatabaseService) {}

  public async saveEncounter(encounter: Encounter): Promise<void> {
    await this.db.getDatabaseContext().encounters.add(encounter);
  }

  public async deleteEncounter(encounterId: number): Promise<void> {
    await this.db.getDatabaseContext().encounters.delete(encounterId);
  }

  public async deleteEncounters(encounterIds: number[]): Promise<void> {
    await this.db.getDatabaseContext().encounters.bulkDelete(encounterIds);
  }
}
