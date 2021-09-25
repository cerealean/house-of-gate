/// <reference lib="webworker" />

import { communityData } from "../data/community";
import { officialData } from "../data/official";
import { thirdPartyData } from "../data/third-party";

addEventListener('message', ({ data }) => {
  const combined = officialData.concat(communityData).concat(thirdPartyData);
  postMessage(combined);
});
