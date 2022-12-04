import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanIHitRoutingModule } from './can-i-hit-routing.module';
import { CanIHitComponent } from './can-i-hit.component';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
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
