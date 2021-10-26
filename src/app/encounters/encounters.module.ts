import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GateCommonModule } from '../common/common.module';
import { MatListModule } from '@angular/material/list';
import { PreviousEncountersComponent } from './components/previous-encounters/previous-encounters.component';
import { EncounterGeneratorComponent } from './components/encounter-generator/encounter-generator.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { EncountersRoutingModule } from './encounters-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    PreviousEncountersComponent,
    EncounterGeneratorComponent
  ],
  imports: [
    CommonModule,
    EncountersRoutingModule,
    GateCommonModule,
    MatListModule,
    MatIconModule,
    MatSliderModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,
    MatBottomSheetModule
  ]
})
export class EncountersModule { }
