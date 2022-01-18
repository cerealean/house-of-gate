import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanIHitComponent } from './can-i-hit.component';

const routes: Routes = [{ path: '', component: CanIHitComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CanIHitRoutingModule { }
