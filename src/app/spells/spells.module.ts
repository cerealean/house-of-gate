import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GateCommonModule } from '../common/common.module';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpellsRoutingModule } from './spells-routing.module';
import { SpellsComponent } from './components/spells/spells.component';



@NgModule({
  declarations: [
    SpellsComponent
  ],
  imports: [
    CommonModule,
    SpellsRoutingModule,
    GateCommonModule,
    MatCardModule,
    MatProgressSpinnerModule
  ]
})
export class SpellsModule { }
