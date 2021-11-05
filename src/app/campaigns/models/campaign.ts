import { Encounter } from "src/app/encounters/models/encounter";

export class Campaign {
  name = '';
  date = new Date();
  image: Blob | undefined;
  encounterIds: number[] = [];
  encounters: Encounter[] = [];

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
