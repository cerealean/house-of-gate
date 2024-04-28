\import { Routes } from '@angular/router';
import { CharacterSheetComponent } from './character-sheet/character-sheet.component';
import { CharactersComponent } from './characters.component';

export const routes: Routes = [
  { path: '', component: CharactersComponent },
  {
    path: 'character-sheet/:character-id',
    component: CharacterSheetComponent
  }
];
