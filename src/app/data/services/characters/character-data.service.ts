import { Injectable } from "@angular/core";
import type { Character } from "src/app/components/characters/models/character";
import { DatabaseService, type IHouseOfGateDao } from "../database.service";

@Injectable({
  providedIn: "root",
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
    const charactersHydrated = await Promise.all(
      characters.map(async c => await this.hydrateCharacter(c))
    );

    return charactersHydrated;
  }

  public async getCharacterById(id: number): Promise<Character | undefined> {
    const character = await this.db.characters.get(id);
    console.log(character);

    if (!character) {
      return undefined;
    }

    return await this.hydrateCharacter(character);
  }

  private async hydrateCharacter(character: Character): Promise<Character> {
    character.campaigns = await this.db.campaigns
      .filter(
        campaign => !!campaign.id && character.campaignIds.includes(campaign.id)
      )
      .toArray();

    return character;
  }
}
