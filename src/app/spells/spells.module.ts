import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GateCommonModule } from '../common/common.module';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpellsRoutingModule } from './spells-routing.module';
import { SpellsComponent } from './components/spells/spells.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    SpellsComponent
  ],
  imports: [
    CommonModule,
    SpellsRoutingModule,
    GateCommonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatIconModule,
    FlexLayoutModule
  ]
})
export class SpellsModule { }
