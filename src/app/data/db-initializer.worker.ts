/// <reference lib="webworker" />
import { communityData } from './community';
import { officialData } from './official';
import { thirdPartyData } from './third-party';

addEventListener('message', ({ data }) => {
  const monsterInfos = officialData.concat(thirdPartyData).concat(communityData);

  postMessage(monsterInfos);
});
