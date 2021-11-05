type DetailedArmorClass = {
  ac: number;
  notes?: string;
}[];

export interface IMonster {
  id: string;
  name: string;
  cr: number;
  size: string;
  type: string;
  alignment: string;
  environment: string[];
  ac: DetailedArmorClass;
  hp: number;
  init: number;
  lair: boolean;
  legendary: boolean;
  unique: boolean;
  sources: string[];
}

export class Monster implements IMonster {
  public id!: string;
  public name!: string;
  public cr!: number;
  public size!: string;
  public type!: string;
  public alignment!: string;
  public environment!: string[];
  public ac!: DetailedArmorClass;
  public hp!: number;
  public init!: number;
  public lair!: boolean;
  public legendary!: boolean;
  public unique!: boolean;
  public sources!: string[];

  public hasEnvironmentIntersection(environments: string[]) {
    return environments.some(givenEnv => this.environment.includes(givenEnv));
  }

  public hasTypeIntersection(types: string[]) {
    return types.some(givenType => this.type.includes(givenType));
  }

  public hasSourceIntersection(sources: string[]) {
    return sources.some(givenSource => this.sources.some(s => s.includes(givenSource)));
  }
}
