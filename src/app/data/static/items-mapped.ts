import { Item } from "../models/i-item";
import { items } from "./items";

export const itemNames = items.map(i => i.name);
export type ItemNames = typeof itemNames[number];
export const itemsMapped = new Map<ItemNames, Item>(items.map(i => [i.name, i]));