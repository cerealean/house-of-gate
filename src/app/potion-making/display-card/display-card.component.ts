import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';

@Component({
  selector: 'potion-making-display-card',
  imports: [MatCardModule, FlexLayoutModule, MatIconModule],
  templateUrl: './display-card.component.html',
  styleUrl: './display-card.component.scss'
})
export class DisplayCardComponent {
  readonly title = input.required<string>();
  readonly subtitle = input.required<string>();
  readonly icon = input.required<string>();
}
