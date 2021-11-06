import { Injectable } from '@angular/core';
import { Encounter } from 'src/app/encounters/models/encounter';
import { DatabaseService } from '../database.service';

@Injectable({
  providedIn: 'any'
})
export class EncounterDataService {

  constructor(
    private readonly db: DatabaseService
  ) { }

  public async saveEncounter(encounter: Encounter): Promise<void> {
    this.db.getDatabaseContext().encounters.add(encounter);
  }
}
