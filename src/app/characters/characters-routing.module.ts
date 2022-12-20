import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterSheetComponent } from './character-sheet/character-sheet.component';
import { CharactersComponent } from './characters.component';
import { CreationWizardComponent } from './creation-wizard/creation-wizard.component';

const routes: Routes = [
  { path: '', component: CharactersComponent },
  {
    path: 'character-sheet/:character-id',
    component: CharacterSheetComponent
  },
  {
    path: 'wizard',
    component: CreationWizardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
