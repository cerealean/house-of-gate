import { AfterViewInit, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Monster } from './models/monster';
import { MonsterDataService } from './monster-data.service';
import { ColumnManagerService } from './services/column-manager.service';
import { ColumnInfo } from './models/column-info';
import { Subscription } from 'rxjs';
import { monsterTypes } from './data/monster-types';
import { MatSort } from '@angular/material/sort';
import { MonsterFilters } from './models/monster-filters';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  private monsters: Monster[] = [];
  public displayedColumns: string[] = [];
  public columns: ColumnInfo[] = [];
  public readonly monsterTypes = monsterTypes;

  public dataSource = new MatTableDataSource<Monster>(this.monsters);

  public filters: MonsterFilters = {
    name: '',
    minCr: 0,
    maxCr: 30,
    type: ''
  };
  private columnUpdates$!: Subscription;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private monsterData: MonsterDataService,
    private columnManager: ColumnManagerService ) {}

  ngOnInit() {
    this.monsters = this.monsterData.getAllMonsters()
      .sort((first, second) => {
        if(first.name > second.name) {
          return 1
        } else if (second.name > first.name) {
          return -1;
        } else {
          return 0;
        }
      });
    this.dataSource.data = this.monsters;
    this.columnUpdates$ = this.columnManager.columnUpdates$.subscribe(update => {
      this.columns = update.allColumns;
      this.displayedColumns = update.shownColumns
      .filter(c => c.isShown)
      .map(c => c.name);
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator.pageSize = 10;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
    this.columnUpdates$?.unsubscribe();
  }

  drop(event: CdkDragDrop<string[]> | Event) {
    const ev = (event as CdkDragDrop<string[]>);
    moveItemInArray(this.displayedColumns, ev.previousIndex, ev.currentIndex);
  }

  filter() {
    let monsterFilters = this.monsters.slice();

    if(this.filters.name) {
      monsterFilters = monsterFilters.filter(x => x.name.toLowerCase().includes(this.filters.name.toLowerCase()));
    }
    if(this.filters.minCr && this.filters.minCr !== 0) {
      monsterFilters = monsterFilters.filter(x => x.cr >= this.filters.minCr);
    }
    if(this.filters.maxCr && this.filters.maxCr !== 30) {
      monsterFilters = monsterFilters.filter(x => x.cr <= this.filters.maxCr);
    }
    if(this.filters.type) {
      monsterFilters = monsterFilters.filter(m => m.type === this.filters.type);
    }

    this.dataSource.data = monsterFilters;
  }

  fill(start: number, end: number): number[] {
    return Array(end - start + 1).fill(0).map((_, index) => start + index);
  }

  isArray(data: any): boolean {
    return Array.isArray(data);
  }
}
