export const languagesList = [
  'common',
  'draconic'
] as const;
export type Languages = typeof languagesList[number];
