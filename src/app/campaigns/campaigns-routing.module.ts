import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignsLandingComponent } from './campaigns-landing/campaigns-landing.component';

const routes: Routes = [
  {
    path: '',
    component: CampaignsLandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignsRoutingModule { }
