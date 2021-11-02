import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ReplaySubject, Subscription } from 'rxjs';
import { ColumnInfo } from 'src/app/monsters/models/column-info';
import { Monster } from 'src/app/monsters/models/monster';
import { StorageKeys, StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-monster-tables',
  templateUrl: './monster-tables.component.html',
  styleUrls: ['./monster-tables.component.scss']
})
export class MonsterTablesComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  @Input() public monsters: Monster[] = [];
  public displayedColumns: string[] = [];
  public columns: ColumnInfo[] = this.generateInitialColumns();

  public dataSource!: MatTableDataSource<Monster>;

  @Output() isLoading = new EventEmitter<boolean>();

  private _columnUpdates$ = new ReplaySubject<{
    updated: ColumnInfo | null,
    allColumns: ColumnInfo[],
    shownColumns: ColumnInfo[]
  }>(20);

  private columnUpdates$ = this._columnUpdates$.asObservable();

  private subscriptions = new Subscription();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private storage: StorageService
  ) { }

  ngOnInit(): void {
    const storedColumns = this.storage.getData<ColumnInfo[]>(StorageKeys.ColumnInfo);
    if(storedColumns) {
      this.columns = storedColumns;
    }
    this.isLoading.emit(true);
    this.dataSource = new MatTableDataSource<Monster>([]);
    this.subscriptions.add(
      this.columnUpdates$.subscribe(update => {
        this.columns = update.allColumns;
        this.displayedColumns = update.shownColumns
          .filter(c => c.isShown)
          .map(c => c.name);
      })
    );
    this._columnUpdates$.next({
      allColumns: this.columns.slice(),
      shownColumns: this.columns.filter(c => c.isShown),
      updated: null
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
    this.subscriptions.unsubscribe();
  }

  isArray(data: any): boolean {
    return Array.isArray(data);
  }

  finishLoading(): void {
    const hasData = !!(this.dataSource && this.dataSource.data && this.dataSource.data.length > 0);
    this.isLoading.emit(!hasData);
  }

  toggleColumn(column: ColumnInfo): void {
    column.isShown = !column.isShown;
    this.storage.setData(StorageKeys.ColumnInfo, this.columns.slice());
    this._columnUpdates$.next({
      allColumns: this.columns.slice(),
      shownColumns: this.columns.filter(c => c.isShown),
      updated: column
    });
  }

  stopPropagation($event: Event) {
    $event.stopPropagation();
  }

  private generateInitialColumns(): ColumnInfo[] {
    return [
      {
        name: 'name',
        isShown: true,
        position: 1
      },
      {
        name: 'cr',
        isShown: true,
        position: 2
      },
      {
        name: 'hp',
        isShown: false,
        position: 3
      },
      {
        name: 'ac',
        isShown: false,
        position: 4
      },
      {
        name: 'size',
        isShown: false,
        position: 5
      },
      {
        name: 'type',
        isShown: true,
        position: 6
      },
      {
        name: 'environment',
        isShown: false,
        position: 7
      },
      {
        name: 'alignment',
        isShown: false,
        position: 8
      },
      {
        name: 'legendary',
        isShown: false,
        position: 9
      },
      {
        name: 'unique',
        isShown: false,
        position: 10
      },
      {
        name: 'sources',
        isShown: true,
        position: 11
      },
    ];
  }
}
