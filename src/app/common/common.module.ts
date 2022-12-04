import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonsterFilterBarComponent } from './components/monster-filter-bar/monster-filter-bar.component';
import { MonsterTablesComponent } from './components/monster-tables/monster-tables.component';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { FormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NumberOnlyDirective } from './directives/number-only.directive';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatIconModule } from '@angular/material/icon';
import { SpellTablesComponent } from './components/spell-tables/spell-tables.component';
import { SpellFilterBarComponent } from './components/spell-filter-bar/spell-filter-bar.component';
import { MatSortModule } from '@angular/material/sort';



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
