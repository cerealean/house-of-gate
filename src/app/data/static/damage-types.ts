export const damageTypesList = [
  'acid',
  'bludgeoning',
  'cold',
  'fire',
  'lightning',
  'necrotic',
  'piercing',
  'poison',
  'radiant',
  'slashing'
] as const;
export type DamageTypes = typeof damageTypesList[number];
