import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanIHitRoutingModule } from './can-i-hit-routing.module';
import { CanIHitComponent } from './can-i-hit.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    CanIHitComponent
  ],
  imports: [
    CommonModule,
    CanIHitRoutingModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ]
})
export class CanIHitModule { }
