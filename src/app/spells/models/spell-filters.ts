import { SchoolsOfMagic } from "./schools-of-magic";

export interface SpellFilters {
  name?: string;
  minLevel?: number;
  maxLevel?: number;
  school?: SchoolsOfMagic[];
  class?: string[];
  ritual?: boolean;
  source?: string[];
}
