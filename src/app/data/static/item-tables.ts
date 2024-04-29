import { numberRange } from "src/app/utilities/number-range";
import { Item } from "../models/i-item";
import { ItemNames, itemsMapped } from "./items-mapped";

export interface ItemWithDiceRoll {
    numRolled: number;
    item: Item;
}

export class ItemTable<K extends number, V extends Item> extends Map<K, V> implements ReadonlyMap<K, V> { 
    toObjectArray(): ItemWithDiceRoll[] {
        return Array.from(this.entries()).map(tuple => ({
            numRolled: tuple[0],
            item: tuple[1]
        }));
    }
}

const getItem = (itemName: ItemNames): Item => itemsMapped.get(itemName)!;
const fillRangeWithItem = (start: number, stop: number, item: ItemNames): [number, Item][] => 
    numberRange(start, stop).map(n => [n, itemsMapped.get(item)!]);

export const MIT_A = new ItemTable([
    ...fillRangeWithItem(1, 50, 'Potion of Healing'),
    ...fillRangeWithItem(51, 60, 'Spell Scroll (Cantrip)'),
    ...fillRangeWithItem(61, 70, 'Potion of Climbing'),
    ...fillRangeWithItem(71, 90, 'Spell Scroll (1st Level)'),
    ...fillRangeWithItem(91, 94, 'Spell Scroll (2nd Level)'),
    ...fillRangeWithItem(95, 98, 'Potion of Greater Healing'),
    [99, getItem('Bag of Holding')],
    [100, getItem('Driftglobe')]
]);

export const MIT_B = new ItemTable([
    ...fillRangeWithItem(1, 15, 'Potion of Greater Healing'),
    ...fillRangeWithItem(16, 22, 'Potion of Fire Breath'),
    ...fillRangeWithItem(23, 29, 'Potion of Resistance'),
    ...fillRangeWithItem(30, 34, 'Ammunition, +1'),
    ...fillRangeWithItem(35, 39, 'Potion of Animal Friendship'),
    ...fillRangeWithItem(40, 44, 'Potion of Hill Giant Strength'),
    ...fillRangeWithItem(45, 49, 'Potion of Growth'),
    ...fillRangeWithItem(50, 54, 'Potion of Water Breathing'),
    ...fillRangeWithItem(55, 59, 'Spell Scroll (2nd Level)'),
    ...fillRangeWithItem(60, 64, 'Spell Scroll (3rd Level)'),
    ...fillRangeWithItem(65, 67, 'Bag of Holding'),
    ...fillRangeWithItem(68, 70, 'Keoghtom\'s Ointment'),
    ...fillRangeWithItem(71, 73, 'Oil of Slipperiness'),
    ...fillRangeWithItem(74, 75, 'Dust of Disappearance'),
    ...fillRangeWithItem(76, 77, 'Dust of Dryness'),
    ...fillRangeWithItem(78, 79, 'Dust of Sneezing and Choking'),
    ...fillRangeWithItem(80, 81, 'Elemental Gem'),
    ...fillRangeWithItem(82, 83, 'Philter of Love'),
    [84, getItem('Alchemy Jug')],
    [85, getItem('Cap of Water Breathing')],
    [86, getItem('Cloak of the Manta Ray')],
    [87, getItem('Driftglobe')],
    [88, getItem('Goggles of Night')],
    [89, getItem('Helm of Comprehending Languages')],
    [90, getItem('Immovable Rod')],
    [91, getItem('Lantern of Revealing')],
    [92, getItem('Mariner\'s Armor')],
    [93, getItem('Mithral Armor')],
    [94, getItem('Potion of Poison')],
    [95, getItem('Ring of Swimming')],
    [96, getItem('Robe of Useful Items')],
    [97, getItem('Robe of Climbing')],
    [98, getItem('Saddle of the Cavalier')],
    [99, getItem('Wand of Magic Detection')],
    [100, getItem('Wand of Secrets')],
]);

export const MIT_C = new ItemTable([
    ...fillRangeWithItem(1, 15, 'Potion of Superior Healing'),
    ...fillRangeWithItem(16, 22, 'Spell Scroll (4th Level)'),
    ...fillRangeWithItem(23, 27, `Ammunition, +2`),
    ...fillRangeWithItem(28, 32, `Potion of Clairvoyance`),
    ...fillRangeWithItem(33, 37, `Potion of Diminution`),
    ...fillRangeWithItem(38, 42, `Potion of Gaseous Form`),
    ...fillRangeWithItem(43, 47, `Potion of Frost Giant Strength`),
    ...fillRangeWithItem(48, 52, `Potion of Stone Giant Strength`),
    ...fillRangeWithItem(53, 57, `Potion of Heroism`),
    ...fillRangeWithItem(58, 62, `Potion of Invulnerability`),
    ...fillRangeWithItem(63, 67, `Potion of Mind Reading`),
    ...fillRangeWithItem(68, 72, `Spell Scroll (5th Level)`),
    ...fillRangeWithItem(73, 75, `Elixir of Health`),
    ...fillRangeWithItem(76, 78, `Oil of Etherealness`),
    ...fillRangeWithItem(79, 81, `Potion of Fire Giant Strength`),
    ...fillRangeWithItem(82, 84, `Quaal's Feather Token`),
    ...fillRangeWithItem(85, 87, `Scroll of Protection`),
    ...fillRangeWithItem(88, 89, `Bag of Beans`),
    ...fillRangeWithItem(90, 91, `Bead of Force`),
    [92, getItem('Chime of Opening')],
    [93, getItem('Decanter of Endless Water')],
    [94, getItem('Eyes of Minute Seeing')],
    [95, getItem('Folding Boat')],
    [96, getItem('Heward\'s Handy Haversack')],
    [97, getItem('Horseshoes of Speed')],
    [98, getItem('Necklace of Fireballs')],
    [99, getItem('Periapt of Health')],
    [100, getItem('Sending Stones')],
]);

export const MIT_D = new ItemTable([
    ...fillRangeWithItem(1, 20, `Potion of Supreme Healing`),
    ...fillRangeWithItem(21, 30, `Potion of Invisibility`),
    ...fillRangeWithItem(31, 40, `Potion of Speed`),
    ...fillRangeWithItem(41, 50, `Spell Scroll (6th Level)`),
    ...fillRangeWithItem(51, 57, `Spell Scroll (7th Level)`),
    ...fillRangeWithItem(58, 62, `Ammunition, +3`),
    ...fillRangeWithItem(63, 67, `Oil of Sharpness`),
    ...fillRangeWithItem(68, 72, `Potion of Flying`),
    ...fillRangeWithItem(73, 77, `Potion of Cloud Giant Strength`),
    ...fillRangeWithItem(78, 82, `Potion of Longevity`),
    ...fillRangeWithItem(83, 87, `Potion of Vitality`),
    ...fillRangeWithItem(88, 92, `Spell Scroll (8th Level)`),
    ...fillRangeWithItem(93, 95, `Horseshoes of a Zephyr`),
    ...fillRangeWithItem(96, 98, `Nolzur's Marvelous Pigments`),
    [99, getItem(`Bag of Devouring`)],
    [100, getItem(`Portable Hole`)],
]);

export const MIT_E = new ItemTable([
    ...fillRangeWithItem(1, 30, 'Spell Scroll (8th Level)'),
    ...fillRangeWithItem(31, 55, `Potion of Storm Giant Strength`),
    ...fillRangeWithItem(56, 70, `Potion of Supreme Healing`),
    ...fillRangeWithItem(71, 85, `Spell Scroll (9th Level)`),
    ...fillRangeWithItem(86, 93, `Universal Solvent`),
    ...fillRangeWithItem(94, 98, `Arrow of Slaying`),
    ...fillRangeWithItem(99, 100, `Sovereign Glue`),
]);

console.log(MIT_E);
