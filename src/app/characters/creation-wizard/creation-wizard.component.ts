import { Component } from '@angular/core';
import { races } from 'src/app/data/static/races';
import { Character } from '../models/character';

@Component({
  selector: 'app-creation-wizard',
  templateUrl: './creation-wizard.component.html',
  styleUrls: ['./creation-wizard.component.scss']
})
export class CreationWizardComponent {
  public readonly racesList = races;
  public readonly character = new Character();

  public onFileChange($event: Event): void {
    const element = $event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if (file) {
      this.character.image = file;
    }
  }
}
