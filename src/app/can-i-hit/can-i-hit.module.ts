import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { FlexLayoutModule } from '@ngbracket/ngx-layout';

import { CanIHitRoutingModule } from './can-i-hit-routing.module';
import { CanIHitComponent } from './can-i-hit.component';

@NgModule({
    imports: [
        CommonModule,
        CanIHitRoutingModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        CanIHitComponent
    ]
})
export class CanIHitModule { }
