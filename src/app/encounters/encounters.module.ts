import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GateCommonModule } from '../common/common.module';
import { MatListModule } from '@angular/material/list';
import { EncounterGeneratorComponent } from './components/encounter-generator/encounter-generator.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { EncountersRoutingModule } from './encounters-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SaveEncounterDialogComponent } from './components/save-encounter-dialog/save-encounter-dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
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
