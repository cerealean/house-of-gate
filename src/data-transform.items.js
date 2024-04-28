const fs = require('node:fs');
const uuid = require('uuid');

const complete = fs.readFileSync('src/app/data/static/complete.json');
const parsed = JSON.parse(complete);
const items = parsed.compendium.item;

const itemsProjected = items.map(s => {
    const name = s.name[0];
    const weight = +s.weight;
    const text = s.text
        ?.filter(t => !t?.toLowerCase().includes('source'))
        .reduce((a, b) => a + (b || '') + ' ', '')
        .trim();
    const source = s.text?.filter(t => t !== null
        && t?.includes('Source:'))[0]
        .split(':')[1]
        ?.trim();
    const sources = source?.split(',').map(s => s.trim());

    if (s.name.length !== 1) {
        console.log(name + ' does not have only one name');
    }
    if (!source) {
        console.log(name + ' does not have a source');
    }
    return {
        id: uuid.v4(),
        name,
        sources,
        text,
        weight
    };
});

// const itemsMapped = new Map();
// itemsProjected.forEach(item => {
//     itemsMapped.set(item.name, item);
// });

fs.writeFileSync('./items.json',
    JSON.stringify(itemsProjected, null, 2),
    {
        flag: 'a+'
    });
