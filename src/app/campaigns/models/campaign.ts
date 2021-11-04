import { GeneratedEncounter } from "src/app/encounters/models/encounter";

export class Campaign {
  name = '';
  date = new Date();
  image: Blob | undefined;
  encounterIds: number[] = [];
  encounters: GeneratedEncounter[] = [];
}
