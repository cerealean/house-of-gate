import { IStoredMetadata } from "src/app/data/models/i-stored-metadata";

const schools = [
  'abjuration',
  'transmutation',
  'conjuration',
  'divination',
  'enchantment',
  'illusion',
  'evocation',
  'necromancy'
] as const;
type SchoolsOfMagic = typeof schools[number];

export interface ISpell extends IStoredMetadata {
  id:         string;
  name:       string;
  level:      number;
  ritual:     boolean;
  school?:    SchoolsOfMagic;
  time:       string;
  range:      string;
  components: string;
  duration:   string;
  classes:    string[];
  sources:    string[];
  text:       string;
}

export class Spell implements ISpell {
  id!: string;
  name!: string;
  level!: number;
  ritual!: boolean;
  school?: SchoolsOfMagic;
  time!: string;
  range!: string;
  components!: string;
  duration!: string;
  classes!: string[];
  sources!: string[];
  text!: string;
}
