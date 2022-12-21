export const races = [
  'aarakocra',
  'aasimar',
  'air genasi',
  'astral elf',
  'autognome',
  'bugbear',
  'centaur',
  'changling',
  'deep gnome',
  'dragonborn',
  'duergar',
  'dwarf',
  'earth genasi',
  'eladrin',
  'elf',
  'fairy',
  'feral tiefling',
  'firbolg',
  'fire genasi',
  'giff',
  'githyanki',
  'githzerai',
  'gnome',
  'goblin',
  'goliath',
  'grung',
  'hadozee',
  'half-elf',
  'half-orc',
  'halfling',
  'harengon',
  'hobgoblin',
  'human',
  'kalashtar',
  'kender',
  'kenku',
  'kobold',
  'leonin',
  'lizardfolk',
  'locathah',
  'loxodon',
  'minotaur',
  'minotaur',
  'orc',
  'owlin',
  'plasmoid',
  'satyr',
  'sea elf',
  'shadar-kai',
  'shifter',
  'simic hybrid',
  'tabaxi',
  'thri-kreen',
  'tiefling',
  'tortle',
  'triton',
  'vedalken',
  'verdan',
  'warforged',
  'water genasi',
  'yuan-ti',
] as const;

export type Races = typeof races[number];