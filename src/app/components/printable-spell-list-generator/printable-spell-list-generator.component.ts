import { AsyncPipe, TitleCasePipe } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
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
import { SpellDataService } from 'src/app/data/services/spells/spell-data.service';
import { classesAndSubclassesForSpells } from 'src/app/data/static/classes';
import { OrdinalPipe } from 'src/app/pipes/ordinal/ordinal.pipe';
import { Spell } from 'src/app/spells/models/spell';

import { FlexLayoutModule } from '@ngbracket/ngx-layout';

import { MatCheckbox } from '@angular/material/checkbox';
import { MatOption, MatSelect } from '@angular/material/select';
import { SpellCardComponent } from './spell-card/spell-card.component';

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
    MatSelect,
    MatOption,
    MatCheckbox,
    FormsModule,
  ],
})
export class PrintableSpellListGeneratorComponent implements OnInit {
  private allSpells = signal<Spell[]>([]);

  public readonly spellClasses = classesAndSubclassesForSpells;

  public selectedSpells: Spell[] = [];
  public filterName = signal('');
  public filterLevel = signal<number[]>([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  public showDescription = signal(false);
  public onlySelected = signal(false);

  public filteredSpells = computed(() => {
    const allSpells = this.allSpells();
    if (!allSpells || allSpells.length === 0) {
      return [];
    }

    if (this.onlySelected()) {
      return this.selectedSpells;
    }

    let filtered = allSpells;

    const name = this.filterName();
    if (name) {
      filtered = filtered.filter(
        (spell) => spell.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
      );
    }

    const levels = this.filterLevel();
    if (levels !== undefined) {
      filtered = filtered.filter((spell) => levels.includes(spell.level));
    }

    return filtered;
  });

  constructor(private readonly spellDataService: SpellDataService) { }

  ngOnInit() {
    this.spellDataService.getAllSpells().then((spells) => {
      const sortedSpells = this.filterSpellsByLevelThenName(spells);
      this.allSpells.set(sortedSpells);
    });
  }

  toggleSpell(spell: Spell): void {
    if (this.selectedSpells.indexOf(spell) !== -1) {
      this.selectedSpells.splice(this.selectedSpells.indexOf(spell), 1);
    } else {
      this.selectedSpells.push(spell);
    }
  }

  private filterSpellsByLevelThenName(spells: Spell[]) {
    return sort(spells).asc([(s) => s.level, (s) => s.name]);
  }
}
