export const environments = [
  "aquatic",
  "arctic",
  "cave",
  "coast",
  "desert",
  "dungeon",
  "forest",
  "grassland",
  "mountain",
  "planar",
  "ruins",
  "swamp",
  "underground",
  "urban",
] as const;

export type Environments = typeof environments[number];
