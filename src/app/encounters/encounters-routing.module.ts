import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncounterGeneratorComponent } from './components/encounter-generator/encounter-generator.component';

const routes: Routes = [
  {
    path: '',
    component: EncounterGeneratorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EncountersRoutingModule { }
