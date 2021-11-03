import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignsRoutingModule } from './campaigns-routing.module';
import { CampaignsLandingComponent } from './campaigns-landing/campaigns-landing.component';

@NgModule({
  declarations: [
    CampaignsLandingComponent
  ],
  imports: [
    CommonModule,
    CampaignsRoutingModule
  ]
})
export class CampaignsModule { }
