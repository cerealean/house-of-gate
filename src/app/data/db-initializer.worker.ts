/// <reference lib="webworker" />

import { community } from "./static/community-rewritten";
import { official } from "./static/official-rewritten";
import { thirdParty } from "./static/third-party-rewritten";

addEventListener('message', ({ data }) => {
  const monsterInfos = official.concat(thirdParty).concat(community);

  postMessage(monsterInfos);
});
