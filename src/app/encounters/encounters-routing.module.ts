import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import {
  EncounterGeneratorComponent,
} from './components/encounter-generator/encounter-generator.component';
import {
  MyEncountersComponent,
} from './components/my-encounters/my-encounters.component';

const routes: Routes = [
  {
    path: 'monster-encounters',
    component: EncounterGeneratorComponent
  },
  {
    path: 'my-encounters',
    component: MyEncountersComponent
  },
  {
    path: '',
    redirectTo: 'monster-encounters',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EncountersRoutingModule { }
