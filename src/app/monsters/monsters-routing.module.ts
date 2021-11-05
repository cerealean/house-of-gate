import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonstersComponent } from './components/monsters/monsters.component';

const routes: Routes = [
  {
    path: '',
    component: MonstersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonstersRoutingModule { }
