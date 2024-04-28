import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';

import { FlexLayoutModule } from '@ngbracket/ngx-layout';

import { GateCommonModule } from '../common/common.module';
import { DataModule } from '../data/data.module';
import { MonstersComponent } from './components/monsters/monsters.component';
import { MonstersRoutingModule } from './monsters-routing.module';

@NgModule({
    imports: [
        CommonModule,
        GateCommonModule,
        MatCardModule,
        MatTabsModule,
        MatIconModule,
        MatDividerModule,
        MatProgressSpinnerModule,
        FlexLayoutModule,
        MonstersRoutingModule,
        DataModule,
        MonstersComponent
    ]
})
export class MonstersModule { }
