export const classNames = [
  'barbarian',
  'bard',
  'cleric',
  'druid',
  'fighter',
  'monk',
  'paladin',
  'ranger',
  'rogue',
  'sorcerer',
  'warlock',
  'wizard',
  'artificer',
  'blood hunter'
] as const;

export type ClassNames = typeof classNames[number];

export class CharacterClass {
  name?: ClassNames;
  level = 1;

}
