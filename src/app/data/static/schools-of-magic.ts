export const schoolsOfMagic = [
  'abjuration',
  'transmutation',
  'conjuration',
  'divination',
  'enchantment',
  'illusion',
  'evocation',
  'necromancy'
] as const;

export type SchoolsOfMagic = typeof schoolsOfMagic[number];
