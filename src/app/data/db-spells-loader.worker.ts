/// <reference lib="webworker" />

import { spells } from "./static/spells";

addEventListener('message', ({ data }) => {
  const spellsData = spells;
  postMessage(spellsData);
});
