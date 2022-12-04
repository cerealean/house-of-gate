import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GateCommonModule } from '../common/common.module';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { EncounterGeneratorComponent } from './components/encounter-generator/encounter-generator.component';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacySliderModule as MatSliderModule } from '@angular/material/legacy-slider';
import { FormsModule } from '@angular/forms';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { EncountersRoutingModule } from './encounters-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { SaveEncounterDialogComponent } from './components/save-encounter-dialog/save-encounter-dialog.component';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MyEncountersComponent } from './components/my-encounters/my-encounters.component';
import { DeleteEncounterDialogComponent } from './components/my-encounters/delete-encounter-dialog/delete-encounter-dialog.component';

@NgModule({
  declarations: [
    EncounterGeneratorComponent,
    SaveEncounterDialogComponent,
    MyEncountersComponent,
    DeleteEncounterDialogComponent
  ],
  imports: [
    CommonModule,
    EncountersRoutingModule,
    GateCommonModule,
    FormsModule,
    MatListModule,
    MatIconModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,
    MatSelectModule,
    MatDialogModule
  ]
})
export class EncountersModule { }
