import { AsyncPipe, TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';

import { SpellDataService } from 'src/app/data/services/spells/spell-data.service';
import { classesAndSubclassesForSpells } from 'src/app/data/static/classes';
import { OrdinalPipe } from 'src/app/pipes/ordinal/ordinal.pipe';
import { Spell } from 'src/app/spells/models/spell';

import { FlexLayoutModule } from '@ngbracket/ngx-layout';

import { SpellCardComponent } from './spell-card/spell-card.component';

@Component({
  selector: 'app-printable-spell-list-generator',
  standalone: true,
  templateUrl: './printable-spell-list-generator.component.html',
  styleUrl: './printable-spell-list-generator.component.scss',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardActions,
    MatCardContent,
    MatCardTitle,
    MatCardSubtitle,
    MatGridList,
    MatGridTile,
    AsyncPipe,
    OrdinalPipe,
    TitleCasePipe,
    FlexLayoutModule,
    SpellCardComponent,
  ],
})
export class PrintableSpellListGeneratorComponent implements OnInit {
  private _allSpells$?: Promise<readonly Readonly<Spell>[]>;

  public readonly spellClasses = classesAndSubclassesForSpells;

  public get allSpells$() {
    return this._allSpells$;
  }
  public selectedSpells: Spell[] = [];

  constructor(private readonly spellDataService: SpellDataService) {}

  async ngOnInit() {
    this._allSpells$ = this.spellDataService
      .getAllSpells()
      .then((sp) => sp.slice(0, 20));
  }
}
