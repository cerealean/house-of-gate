import { AsyncPipe, TitleCasePipe } from '@angular/common';
import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
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
import { debounceTime } from 'rxjs/operators';
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
    FormsModule,
  ],
})
export class PrintableSpellListGeneratorComponent implements OnInit, OnDestroy {
  private allSpells?: Spell[];

  public readonly displayModes = DisplayModes;
  public readonly spellClasses = classesAndSubclassesForSpells;
  public readonly filteredSpells$ = new BehaviorSubject<Spell[]>([]);

  public selectedDisplayMode = DisplayModes.TilesWithoutDescription;
  public selectedSpells: Spell[] = [];
  public filterName = signal('');

  constructor(private readonly spellDataService: SpellDataService) {
    toObservable(this.filterName)
      .pipe(debounceTime(1000))
      .subscribe(async (name) => {
        const allSpells = this.allSpells;
        if (!allSpells || allSpells.length === 0) {
          return;
        }

        const filtered = allSpells.filter(
          (spell) => spell.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
        );
        this.filteredSpells$.next(filtered);
      });
  }

  ngOnInit() {
    this.spellDataService.getAllSpells().then((spells) => {
      const sortedSpells = this.filterSpellsByLevelThenName(spells);
      this.allSpells = sortedSpells;
      this.filteredSpells$.next(sortedSpells);
    });
  }

  ngOnDestroy(): void {
    this.filteredSpells$.complete();
  }

  private filterSpellsByLevelThenName(spells: Spell[]) {
    return sort(spells).asc([(s) => s.level, (s) => s.name]);
  }
}
