import { GeneratedEncounter } from "src/app/encounters/models/encounter";

export class Campaign {
  name: string = '';
  image: Blob | undefined;
  encounters: GeneratedEncounter[] = [];
}
