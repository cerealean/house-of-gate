import { spells } from "src/app/data/static/spells";

const convertedSpells = spells.map(s => {
  s.concentration = !!s.duration?.toLowerCase().includes('concentration')
});
