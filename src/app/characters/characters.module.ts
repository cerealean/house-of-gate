import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';

import { FlexLayoutModule } from '@ngbracket/ngx-layout';

import {
  CharacterSheetComponent,
} from './character-sheet/character-sheet.component';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import {
  DamageCalculatorModalComponent,
} from './damage-calculator-modal/damage-calculator-modal.component';
import { NewCharacterComponent } from './new-character/new-character.component';

@NgModule({
  declarations: [
    CharactersComponent,
    NewCharacterComponent,
    CharacterSheetComponent,
    DamageCalculatorModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CharactersRoutingModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSelectModule,
    MatProgressBarModule,
    MatDialogModule
  ]
})
export class CharactersModule { }
