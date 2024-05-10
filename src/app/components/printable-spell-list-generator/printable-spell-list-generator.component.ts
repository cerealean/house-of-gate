import { AsyncPipe, TitleCasePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
} from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';

import { sort } from 'fast-sort';
import { BehaviorSubject } from 'rxjs';
import { SpellDataService } from 'src/app/data/services/spells/spell-data.service';
import { classesAndSubclassesForSpells } from 'src/app/data/static/classes';
import { OrdinalPipe } from 'src/app/pipes/ordinal/ordinal.pipe';
import { Spell } from 'src/app/spells/models/spell';

import { FlexLayoutModule } from '@ngbracket/ngx-layout';

import { SpellCardComponent } from './spell-card/spell-card.component';

enum DisplayModes {
  TilesWithDescription,
  TilesWithoutDescription,
}

@Component({
  selector: 'app-printable-spell-list-generator',
  standalone: true,
  templateUrl: './printable-spell-list-generator.component.html',
  styleUrl: './printable-spell-list-generator.component.scss',
  imports: [
    AsyncPipe,
    OrdinalPipe,
    TitleCasePipe,
    FlexLayoutModule,
    SpellCardComponent,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatFormField,
    MatLabel,
    MatInput,
    MatPaginator,
  ],
})
export class PrintableSpellListGeneratorComponent implements OnInit, OnDestroy {
  public readonly displayModes = DisplayModes;
  public readonly spellClasses = classesAndSubclassesForSpells;
  public readonly filteredSpells$ = new BehaviorSubject<Spell[]>([]);

  public selectedDisplayMode = DisplayModes.TilesWithoutDescription;
  public selectedSpells: Spell[] = [];

  constructor(private readonly spellDataService: SpellDataService) {}

  ngOnInit() {
    this.spellDataService
      .getAllSpells()
      .then((spells) =>
        this.filteredSpells$.next(this.filterSpellsByLevelThenName(spells))
      );
  }

  ngOnDestroy(): void {
    this.filteredSpells$.complete();
  }

  private filterSpellsByLevelThenName(spells: Spell[]) {
    return sort(spells).asc([(s) => s.level, (s) => s.name]);
  }
}
