import { IStoredMetadata } from 'src/app/data/models/i-stored-metadata';
import { Classes, SpellsClasses } from 'src/app/data/static/classes';
import { SchoolsOfMagic } from 'src/app/data/static/schools-of-magic';

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
  classes!: SpellsClasses[];
  sources!: string[];
  text!: string;
  concentration!: boolean;

  public hasSourceIntersection(sources: string[]) {
    return sources.some((givenSource) =>
      this.sources.some((s) =>
        s?.toLowerCase().includes(givenSource?.toLowerCase())
      )
    );
  }

  public hasClassIntersection(classes: Classes[]) {
    return classes.some((givenClass) =>
      this.classes.some((s) =>
        s?.toLowerCase().includes(givenClass?.toLowerCase())
      )
    );
  }
}
