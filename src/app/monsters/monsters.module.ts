import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MonstersComponent } from './components/monsters/monsters.component';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MonstersRoutingModule } from './monsters-routing.module';
import { GateCommonModule } from '../common/common.module';
import { MatDividerModule } from '@angular/material/divider';
import { DataModule } from '../data/data.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    MonstersComponent
  ],
  imports: [
    CommonModule,
    GateCommonModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    MonstersRoutingModule,
    DataModule
  ]
})
export class MonstersModule { }
