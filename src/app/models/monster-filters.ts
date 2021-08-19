export interface MonsterFilters {
  name?: string;
  minCr?: number;
  maxCr?: number;
  type?: string | string[];
  alignment?: string | string[];
  legendary?: boolean;
  unique?: boolean;
}
