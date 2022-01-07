import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { classes } from 'src/app/data/static/classes';
import { schoolsOfMagic } from 'src/app/data/static/schools-of-magic';
import { sources } from 'src/app/data/static/sources';
import { SpellFilters } from 'src/app/spells/models/spell-filters';

@Component({
  selector: 'app-spell-filter-bar',
  templateUrl: './spell-filter-bar.component.html',
  styleUrls: ['./spell-filter-bar.component.scss']
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
      source: this.sources.slice(),
      class: classes.slice(),
      school: schoolsOfMagic.slice()
    };
  }
}
