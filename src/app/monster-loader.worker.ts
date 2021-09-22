/// <reference lib="webworker" />

import { communityData } from "./data/community";
import { officialData } from "./data/official";
import { Monster, MonsterInfo } from "./models/monster";
import { thirdPartyData } from './data/third-party';

addEventListener('message', ({ data }) => {
  const official = convertMonsterInfoToMonsterClass(officialData);
  const community = convertMonsterInfoToMonsterClass(communityData);
  const thirdParty = convertMonsterInfoToMonsterClass(thirdPartyData);
  const combined = official.concat(community).concat(thirdParty);
  postMessage(combined);
});

function convertMonsterInfoToMonsterClass(info: MonsterInfo[]): Monster[] {
    return info.map(i => new Monster(i));
}
