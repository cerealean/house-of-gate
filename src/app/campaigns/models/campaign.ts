import { Character } from "src/app/characters/models/character";
import { Encounter } from "src/app/encounters/models/encounter";

export class Campaign {
  id?: number;
  name = '';
  date = new Date();
  image: Blob | undefined;
  encounters: Encounter[] = [];
  characters: Character[] = [];

  private imageUrl: string | undefined;

  public getImageSource() {
    if (this.image) {
      this.imageUrl = URL.createObjectURL(this.image);
    }

    return this.imageUrl;
  }

  public unsetImageSource() {
    if (this.imageUrl) {
      URL.revokeObjectURL(this.imageUrl);
    }
  }
}
