import { Injectable } from "@angular/core";
import type { Monster } from "src/app/components/monsters/models/monster";
import { DatabaseService } from "src/app/data/services/database.service";

@Injectable({
  providedIn: "any",
})
export class MonsterDataService {
  constructor(private db: DatabaseService) {}

  public async getAllMonsters(): Promise<Monster[]> {
    return this.db.getDatabaseContext().monsters.toArray();
  }

  public async clearMonsters(): Promise<void> {
    return this.db.getDatabaseContext().monsters.clear();
  }
}
