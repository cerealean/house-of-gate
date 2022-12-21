export const abilities = [
  'strength',
  'dexterity',
  'constitution',
  'intelligence',
  'wisdom',
  'charisma'
] as const;
export type Abilities = typeof abilities[number];
export interface CharacterAbilities<T> extends Record<Abilities, T> { }
export interface AbilityModifiers extends Map<Abilities, number> { };
