export const conditionsList = [
  'charmed',
  'frightened',
  'incapacitated',
  'poisoned',
] as const;
export type Conditions = typeof conditionsList[number];
