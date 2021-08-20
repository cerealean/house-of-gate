import { EncounterDifficulties } from "../enums/encounter-difficulties";

export interface EncounterRequest {
  numberOfPlayers: number,
  maxNumberOfEnemies: number,
  level: number,
  difficulty: EncounterDifficulties
}
