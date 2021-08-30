import { AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
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

  public filters: MonsterFilters = {
    name: '',
    minCr: 0,
    maxCr: 30,
    type: this.monsterTypes,
    environment: this.environments.concat(''),
    legendary: false,
    unique: false
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
}
