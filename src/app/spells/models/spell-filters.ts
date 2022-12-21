import { ClassNames } from "src/app/data/static/classes";
import { SchoolsOfMagic } from "src/app/data/static/schools-of-magic";

export interface SpellFilters {
  name?: string;
  minLevel?: number;
  maxLevel?: number;
  school?: SchoolsOfMagic[];
  class?: ClassNames[];
  ritual?: boolean;
  source?: string[];
  concentration?: boolean;
}
