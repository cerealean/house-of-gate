export interface Monster {
  guid: string;
  fid: string;
  name: string;
  cr: number;
  size: string;
  type: string;
  tags: string;
  section: string;
  alignment: string;
  environment: string;
  ac: number | {ac: number, notes?: string}[];
  hp: number;
  init: number;
  lair?: string;
  legendary?: boolean;
  unique?: string;
  sources: string;
  notes?: string;
}
