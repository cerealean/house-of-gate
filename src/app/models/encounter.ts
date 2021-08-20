import { Monster } from "./monster";

export interface MonsterEncounter {
  monster: Monster;
  quantity: number;
}

export type Encounter = MonsterEncounter[];
