export interface MonsterFilters {
  name?: string;
  minCr?: number;
  maxCr?: number;
  type?: string[];
  environment?: string[];
  legendary?: boolean;
  unique?: boolean;
  sources?: string[];
}
