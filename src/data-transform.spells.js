// import fs from 'fs';
const fs = require('fs');
const uuid = require('uuid');

const complete = fs.readFileSync('src/app/data/static/complete.json');
const parsed = JSON.parse(complete);
const spells = parsed.compendium.spell;
const magicSchools = new Map([
  ['A', 'abjuration'],
  ['T', 'transmutation'],
  ['C', 'conjuration'],
  ['D', 'divination'],
  ['EN', 'enchantment'],
  ['I', 'illusion'],
  ['EV', 'evocation'],
  ['N', 'necromancy']
]);

const newMap = spells.map(s => {
  const name = s.name[0];
  const text = s.text
    ?.filter(t => !t?.toLowerCase().includes('source'))
    .reduce((a, b) => a + (b || '') + ' ', '')
    .trim();
  const source = s.text?.filter(t => t !== null && t?.includes('Source:'))[0]
    .split(':')[1]
    ?.trim();
  const sources = source?.split(',').map(s => s.trim());
  const school = magicSchools.get(s.school);

  if (s.name.length !== 1) {
    console.log(name + ' does not have only one name');
  }
  if (!source) {
    console.log(name + ' does not have a source');
  }
  return {
    id: uuid.v4(),
    name: name,
    level: +s.level,
    ritual: s.ritual === 'YES',
    school: school,
    time: s.time,
    range: s.range,
    components: s.components,
    duration: s.duration,
    classes: s.classes?.split(',').map(c => c.trim()) || [],
    sources: sources,
    text: text
  };
}).filter(m => !m.name.endsWith('*') && !m.name.toLowerCase().includes('invocation'));

fs.writeFileSync('./spells.json', JSON.stringify(newMap, null, 2));

