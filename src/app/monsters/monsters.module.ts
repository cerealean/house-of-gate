import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncounterGeneratorComponent } from './components/encounter-generator/encounter-generator.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { MonsterTablesComponent } from './components/monster-tables/monster-tables.component';
import { PreviousEncountersComponent } from './components/previous-encounters/previous-encounters.component';
import { NumberOnlyDirective } from './directives/number-only.directive';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MonstersComponent } from './components/monsters/monsters.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MonstersRoutingModule } from './monsters-routing.module';

@NgModule({
  declarations: [
    FilterBarComponent,
    MonsterTablesComponent,
    EncounterGeneratorComponent,
    PreviousEncountersComponent,
    NumberOnlyDirective,
    MonstersComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTooltipModule,
    MatDividerModule,
    MatBottomSheetModule,
    MatListModule,
    MatSliderModule,
    MatCardModule,
    FormsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSortModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatIconModule,
    FlexLayoutModule,
    MonstersRoutingModule
  ]
})
export class MonstersModule { }
