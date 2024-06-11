import { TitleCasePipe } from "@angular/common";
import { Component, input } from "@angular/core";

import { FlexLayoutModule } from "@ngbracket/ngx-layout";

import { OrdinalPipe } from "../../../pipes/ordinal/ordinal.pipe";
import { YesNoPipe } from "../../../pipes/yes-no/yes-no.pipe";
import { Spell } from "../../spells/models/spell";

@Component({
  selector: "app-spell-card",
  standalone: true,
  templateUrl: "./spell-card.component.html",
  styleUrl: "./spell-card.component.scss",
  imports: [OrdinalPipe, TitleCasePipe, YesNoPipe, FlexLayoutModule],
})
export class SpellCardComponent {
  public readonly spell = input.required<Spell>();
}
