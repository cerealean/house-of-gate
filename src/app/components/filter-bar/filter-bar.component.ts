import { AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { sources } from 'src/app/data/sources';
import { metaInfo } from '../../data/meta-info';
import { MonsterFilters } from '../../models/monster-filters';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit, OnDestroy, AfterViewInit {
  public readonly monsterTypes = metaInfo.types;
  public readonly environments = metaInfo.environments;
  public readonly sources = sources;

  public filters: MonsterFilters = {
    name: '',
    minCr: 0,
    maxCr: 30,
    type: this.monsterTypes,
    environment: this.environments.concat('None'),
    legendary: undefined,
    unique: undefined,
    sources: this.sources
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

    if(this.filters.sources === undefined) {
      this.filters.sources = this.sources;
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
      this.storage.setFilterData(this.filters);
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
}
