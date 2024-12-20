import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MatSelectChange, MatSelect } from '@angular/material/select';
import { classes } from 'src/app/data/static/classes';
import { schoolsOfMagic } from 'src/app/data/static/schools-of-magic';
import { sources } from 'src/app/data/static/sources';
import { SpellFilters } from 'src/app/spells/models/spell-filters';
import { MatButton } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatOption } from '@angular/material/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { FlexModule } from '@ngbracket/ngx-layout/flex';
import { MatCard } from '@angular/material/card';

@Component({
    selector: 'app-spell-filter-bar',
    templateUrl: './spell-filter-bar.component.html',
    styleUrls: ['./spell-filter-bar.component.scss'],
    imports: [MatCard, FlexModule, MatFormField, MatLabel, MatInput, FormsModule, MatSelect, NgFor, MatOption, MatCheckbox, MatButton]
})
export class SpellFilterBarComponent implements OnInit, OnDestroy, AfterViewInit {
  public readonly sources = sources;
  public readonly classes = classes;
  public readonly schools = schoolsOfMagic;

  @Input() public filters!: SpellFilters;
  @Output() public readonly filterChanges = new EventEmitter<SpellFilters>();

  ngOnInit(): void {
    if(!this.filters) {
      this.setInitialFilters();
      this.filter();
    }
  }

  ngOnDestroy(): void {
    this.filterChanges?.complete();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.filterChanges.emit(this.filters);
    });
  }

  filter(event?: MatSelectChange) {
    setTimeout(() => {
      this.filterChanges.emit(this.filters);
    }, 60);
  }

  fill(start: number, end: number): number[] {
    return Array(end - start + 1).fill(0).map((_, index) => start + index);
  }

  changeCheckboxState($event: MouseEvent, filterKey: string) {
    $event.preventDefault();
    $event.stopPropagation();
    const currentValue = (this.filters as any)[filterKey];
    if(currentValue === true) {
      (this.filters as any)[filterKey] = false;
    } else if(currentValue === false) {
      (this.filters as any)[filterKey] = undefined;
    } else {
      (this.filters as any)[filterKey] = true;
    }
    this.filter();
  }

  setInitialFilters(): void {
    this.filters = {
      name: '',
      minLevel: 0,
      maxLevel: 9,
      ritual: undefined,
      concentration: undefined,
      source: this.sources.slice(),
      class: classes.slice(),
      school: schoolsOfMagic.slice()
    };
  }
}
