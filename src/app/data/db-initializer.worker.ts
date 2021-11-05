/// <reference lib="webworker" />

import { community } from "./community-rewritten";
import { official } from "./official-rewritten";
import { thirdParty } from "./third-party-rewritten";

addEventListener('message', ({ data }) => {
  const monsterInfos = official.concat(thirdParty).concat(community);

  postMessage(monsterInfos);
});
