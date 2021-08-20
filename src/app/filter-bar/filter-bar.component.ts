import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { monsterTypes } from '../data/monster-types';
import { MonsterFilters } from '../models/monster-filters';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit, OnDestroy {
  public readonly monsterTypes = monsterTypes;

  public filters: MonsterFilters = {
    name: '',
    minCr: 0,
    maxCr: 30,
    type: this.monsterTypes
  };

  @Output() filterChanges = new EventEmitter<MonsterFilters>();

  constructor(
    private storage: StorageService
  ) { }

  ngOnInit(): void {
    const savedFilters = this.storage.getFilterData();
    if(savedFilters) {
      this.filters = savedFilters;
    }
    this.filterChanges.emit(this.filters);
  }

  ngOnDestroy(): void {
    this.filterChanges?.complete();
  }

  filter() {
    setTimeout(() => {
      this.filterChanges.emit(this.filters);
      this.storage.setFilterData(this.filters);
    }, 120);
  }

  fill(start: number, end: number): number[] {
    return Array(end - start + 1).fill(0).map((_, index) => start + index);
  }
}
