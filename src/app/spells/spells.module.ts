import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { FlexLayoutModule } from '@ngbracket/ngx-layout';

import { GateCommonModule } from '../common/common.module';
import { SpellsComponent } from './components/spells/spells.component';
import { SpellsRoutingModule } from './spells-routing.module';

@NgModule({
    imports: [
        CommonModule,
        SpellsRoutingModule,
        GateCommonModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatDividerModule,
        MatIconModule,
        FlexLayoutModule,
        SpellsComponent
    ]
})
export class SpellsModule { }
