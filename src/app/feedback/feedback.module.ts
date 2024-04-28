import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackRoutingModule } from './feedback-routing.module';
import { FeedbackComponent } from './feedback.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
    imports: [
        CommonModule,
        FeedbackRoutingModule,
        MatCardModule,
        FeedbackComponent
    ]
})
export class FeedbackModule { }
