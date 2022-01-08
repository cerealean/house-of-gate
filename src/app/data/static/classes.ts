export const classes = [
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

export type Classes = typeof classes[number];
