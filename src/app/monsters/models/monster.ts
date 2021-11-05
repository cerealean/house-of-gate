type DetailedArmorClass = {
  ac: number;
  notes?: string;
}[];

export interface MonsterInfo {
  name: string;
  cr: number;
  size: string;
  type: string;
  alignment: string;
  environment?: string;
  ac: number | DetailedArmorClass;
  hp: number;
  init: number;
  lair?: string;
  legendary?: boolean;
  unique?: boolean;
  sources: string;
}

export class Monster {
  public id!: number;
  public name!: string;
  public cr!: number;
  public size!: string;
  public type!: string;
  public alignment!: string;
  public environment!: string[];
  public ac!: DetailedArmorClass;
  public hp!: number;
  public init!: number;
  public lair?: string;
  public legendary?: boolean;
  public unique?: boolean;
  public sources!: string[];

  constructor(info?: MonsterInfo) {
    if(!info) {
      return;
    }
    if((info as any).id) {
      this.id = (info as any).id;
    }
    this.name = info.name;
    this.cr = info.cr;
    this.size = info.size;
    this.type = info.type;
    this.alignment = info.alignment;
    this.environment = this.parseStringToArray((info as MonsterInfo).environment)
    this.ac = this.parseArmorClass(info.ac);
    this.hp = info.hp;
    this.init = info.init;
    this.lair = info.lair;
    this.legendary = !!info.legendary;
    this.unique = !!info.unique;
    this.sources = this.parseStringToArray((info as MonsterInfo).sources);
  }

  public hasEnvironmentIntersection(environments: string[]) {
    return environments.some(givenEnv => this.environment.includes(givenEnv));
  }

  public hasTypeIntersection(types: string[]) {
    return types.some(givenType => this.type.includes(givenType));
  }

  public hasSourceIntersection(sources: string[]) {
    return sources.some(givenSource => this.sources.some(s => s.includes(givenSource)));
  }

  private parseStringToArray(value: string | undefined): string[] {
    if (!value?.trim()) {
      return ['None'];
    }
    return value.split(',').map(v => v.trim());
  }

  private parseArmorClass(value: number | DetailedArmorClass): DetailedArmorClass {
    if (typeof value === 'number') {
      return [{ ac: value }];
    }

    return value;
  }
}
