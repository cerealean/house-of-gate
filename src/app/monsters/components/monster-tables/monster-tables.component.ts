import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { ColumnInfo } from '../../models/column-info';
import { Monster } from '../../models/monster';
import { ColumnManagerService } from '../../services/column-manager.service';

@Component({
  selector: 'app-monster-tables',
  templateUrl: './monster-tables.component.html',
  styleUrls: ['./monster-tables.component.scss']
})
export class MonsterTablesComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  @Input() public monsters: Monster[] = [];
  public displayedColumns: string[] = [];
  public columns: ColumnInfo[] = [];

  public dataSource!: MatTableDataSource<Monster>;

  @Output() isLoading = new EventEmitter<boolean>();

  private columnUpdates$!: Subscription;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private columnManager: ColumnManagerService
  ) { }

  ngOnInit(): void {
    this.isLoading.emit(true);
    this.dataSource = new MatTableDataSource<Monster>([]);
    this.columnUpdates$ = this.columnManager.columnUpdates$.subscribe(update => {
      this.columns = update.allColumns;
      this.displayedColumns = update.shownColumns
        .filter(c => c.isShown)
        .map(c => c.name);
    });
  }

  ngOnChanges(simpleChanges: SimpleChanges): void {
    if (simpleChanges.monsters && this.dataSource) {
      this.dataSource.data = simpleChanges.monsters.currentValue;
    }
  }

  ngAfterViewInit() {
    this.paginator.pageSize = 10;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.data = this.monsters;
  }

  ngOnDestroy(): void {
    this.columnUpdates$?.unsubscribe();
  }

  isArray(data: any): boolean {
    return Array.isArray(data);
  }

  drop(event: CdkDragDrop<string[]> | Event) {
    const ev = (event as CdkDragDrop<string[]>);
    moveItemInArray(this.displayedColumns, ev.previousIndex, ev.currentIndex);
  }

  finishLoading(): void {
    const hasData = !!(this.dataSource && this.dataSource.data && this.dataSource.data.length > 0);
    this.isLoading.emit(!hasData);
  }
}
