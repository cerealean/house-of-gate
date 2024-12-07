import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';

@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.scss'],
    standalone: true,
    imports: [MatCard]
})
export class FeedbackComponent {

  constructor() { }

}