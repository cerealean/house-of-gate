import { IStoredMetadata } from "src/app/data/models/i-stored-metadata";
import { ClassNames } from "src/app/data/static/classes";
import { SchoolsOfMagic } from "src/app/data/static/schools-of-magic";

export interface ISpell extends IStoredMetadata {
  id: string;
  name: string;
  level: number;
  ritual: boolean;
  school?: SchoolsOfMagic;
  time: string;
  range: string;
  components: string;
  duration: string;
  classes: string[];
  sources: string[];
  text: string;
  concentration: boolean;
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
  classes!: ClassNames[];
  sources!: string[];
  text!: string;
  concentration!: boolean;

  public hasSourceIntersection(sources: string[]) {
    return sources.some(givenSource => this.sources.some(s => s?.toLowerCase().includes(givenSource?.toLowerCase())));
  }

  public hasClassIntersection(classes: ClassNames[]) {
    return classes.some(givenClass => this.classes.some(s => s?.toLowerCase().includes(givenClass?.toLowerCase())));
  }

}
