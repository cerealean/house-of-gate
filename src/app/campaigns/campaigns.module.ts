import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignsRoutingModule } from './campaigns-routing.module';
import { CampaignsLandingComponent } from './campaigns-landing/campaigns-landing.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NewCampaignComponent } from './new-campaign/new-campaign.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { DataModule } from '../data/data.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    CampaignsLandingComponent,
    NewCampaignComponent
  ],
  imports: [
    CommonModule,
    CampaignsRoutingModule,
    FormsModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    DataModule,
    MatDividerModule,
    MatMenuModule
  ]
})
export class CampaignsModule { }
