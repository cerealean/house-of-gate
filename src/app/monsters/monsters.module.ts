import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MonstersComponent } from './components/monsters/monsters.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MonstersRoutingModule } from './monsters-routing.module';
import { GateCommonModule } from '../common/common.module';
import { MatDividerModule } from '@angular/material/divider';
import { DataModule } from '../data/data.module';

@NgModule({
  declarations: [
    MonstersComponent
  ],
  imports: [
    CommonModule,
    GateCommonModule,
    MatCardModule,
    MatTabsModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    MonstersRoutingModule,
    DataModule
  ]
})
export class MonstersModule { }
