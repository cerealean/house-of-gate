import { items } from "./items";

export const itemsMapped = new Map(items.map(i => [i.name, i]));