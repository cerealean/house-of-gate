import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { FlexLayoutModule } from '@ngbracket/ngx-layout';

import {
  MonsterFilterBarComponent,
} from './components/monster-filter-bar/monster-filter-bar.component';
import {
  MonsterTablesComponent,
} from './components/monster-tables/monster-tables.component';
import {
  SpellFilterBarComponent,
} from './components/spell-filter-bar/spell-filter-bar.component';
import {
  SpellTablesComponent,
} from './components/spell-tables/spell-tables.component';
import { NumberOnlyDirective } from './directives/number-only.directive';

@NgModule({
  declarations: [
    MonsterFilterBarComponent,
    MonsterTablesComponent,
    SpellTablesComponent,
    SpellFilterBarComponent,
    NumberOnlyDirective
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatMenuModule,
    FlexLayoutModule,
    MatSortModule
  ],
  exports: [
    MonsterFilterBarComponent,
    MonsterTablesComponent,
    SpellTablesComponent,
    NumberOnlyDirective,
    SpellFilterBarComponent
  ]
})
export class GateCommonModule { }
