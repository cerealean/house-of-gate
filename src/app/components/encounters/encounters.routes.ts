import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncounterGeneratorComponent } from './components/encounter-generator/encounter-generator.component';
import { MyEncountersComponent } from './components/my-encounters/my-encounters.component';

export const routes: Routes = [
  {
    path: '',
    component: EncounterGeneratorComponent
  },
  {
    path: 'my-encounters',
    component: MyEncountersComponent
  }
];
