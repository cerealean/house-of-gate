import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCard } from '@angular/material/card';

@Component({
    selector: 'app-terms',
    templateUrl: './terms.component.html',
    styleUrls: ['./terms.component.scss'],
    imports: [MatCard, RouterLink]
})
export class TermsComponent {

  constructor() { }

}
