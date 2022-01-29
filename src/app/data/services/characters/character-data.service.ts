import { Injectable } from '@angular/core';
import { Character } from 'src/app/characters/models/character';
import { IHouseOfGateDao, DatabaseService } from '../database.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterDataService {
  private readonly db: IHouseOfGateDao;

  constructor(database: DatabaseService) {
    this.db = database.getDatabaseContext();
  }

  public async addCharacter(character: Character): Promise<void> {
    await this.db.characters.add(character);
  }

  public async editCharacter(character: Character): Promise<void> {
    await this.db.characters.put(character);
  }

  public async getAllCharacters(): Promise<Character[]> {
    const characters = await this.db.characters.toArray();
    const charactersHydrated = await Promise.all(characters.map(async c => {
      c.campaigns = await this.db.campaigns
        .filter(campaign => !!campaign.id && c.campaignIds.includes(campaign.id))
        .toArray();

      return c;
    }));

    return charactersHydrated;
  }
}
