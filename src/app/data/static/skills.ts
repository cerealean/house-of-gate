import { Abilities } from "./abilities";

export const skills = [
  'athletics',
  'acrobatics',
  'sleightOfHand',
  'stealth',
  'arcana',
  'history',
  'investigation',
  'nature',
  'religion',
  'animalHandling',
  'insight',
  'medicine',
  'perception',
  'survival',
  'deception',
  'intimidation',
  'performance',
  'persuasion'
] as const;
export type Skills = typeof skills[number];
export interface CharacterSkills<T> extends Record<Skills, T> { };
export const abilitiesToSkillsMapping = new Map<Skills, Abilities>([
  ['athletics', 'strength'],
  ['acrobatics', 'dexterity'],
  ['sleightOfHand', 'dexterity'],
  ['stealth', 'dexterity'],
  ['arcana', 'intelligence'],
  ['history', 'intelligence'],
  ['investigation', 'intelligence'],
  ['nature', 'intelligence'],
  ['religion', 'intelligence'],
  ['animalHandling', 'wisdom'],
  ['insight', 'wisdom'],
  ['medicine', 'wisdom'],
  ['perception', 'wisdom'],
  ['survival', 'wisdom'],
  ['deception', 'charisma'],
  ['intimidation', 'charisma'],
  ['performance', 'charisma'],
  ['persuasion', 'charisma'],
]) as ReadonlyMap<Skills, Abilities>;
