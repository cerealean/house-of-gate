const schools = [
  'abjuration',
  'transmutation',
  'conjuration',
  'divination',
  'enchantment',
  'illusion',
  'evocation',
  'necromancy'
] as const;
type SchoolsOfMagic = typeof schools[number];

export interface Spell {
  name:       string;
  level:      number;
  ritual:     boolean;
  school?:    SchoolsOfMagic;
  time:       string;
  range:      string;
  components: string;
  duration:   string;
  classes:    string[];
  sources:    string[];
  text:       string;
}
