import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';

import { FlexLayoutModule } from '@ngbracket/ngx-layout';

import { GateCommonModule } from '../common/common.module';
import {
  EncounterGeneratorComponent,
} from './components/encounter-generator/encounter-generator.component';
import {
  DeleteEncounterDialogComponent,
} from './components/my-encounters/delete-encounter-dialog/delete-encounter-dialog.component';
import {
  MyEncountersComponent,
} from './components/my-encounters/my-encounters.component';
import {
  SaveEncounterDialogComponent,
} from './components/save-encounter-dialog/save-encounter-dialog.component';
import { EncountersRoutingModule } from './encounters-routing.module';

@NgModule({
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
        MatDialogModule,
        EncounterGeneratorComponent,
        SaveEncounterDialogComponent,
        MyEncountersComponent,
        DeleteEncounterDialogComponent
    ]
})
export class EncountersModule { }
