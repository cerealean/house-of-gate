import { TitleCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';

import { Spell } from 'src/app/spells/models/spell';

import { OrdinalPipe } from '../../../pipes/ordinal/ordinal.pipe';
import { YesNoPipe } from '../../../pipes/yes-no/yes-no.pipe';

@Component({
  selector: 'app-spell-card',
  standalone: true,
  templateUrl: './spell-card.component.html',
  styleUrl: './spell-card.component.scss',
  imports: [OrdinalPipe, TitleCasePipe, YesNoPipe],
})
export class SpellCardComponent {
  public readonly spell = input.required<Spell>();
}
