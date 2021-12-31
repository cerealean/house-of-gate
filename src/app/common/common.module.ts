import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonsterFilterBarComponent } from './components/monster-filter-bar/monster-filter-bar.component';
import { MonsterTablesComponent } from './components/monster-tables/monster-tables.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NumberOnlyDirective } from './directives/number-only.directive';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { SpellTablesComponent } from './components/spell-tables/spell-tables.component';



@NgModule({
  declarations: [
    MonsterFilterBarComponent,
    MonsterTablesComponent,
    SpellTablesComponent,
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
    FlexLayoutModule
  ],
  exports: [
    MonsterFilterBarComponent,
    MonsterTablesComponent,
    SpellTablesComponent,
    NumberOnlyDirective
  ]
})
export class GateCommonModule { }
