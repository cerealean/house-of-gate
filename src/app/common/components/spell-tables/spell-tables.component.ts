import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ColumnInfo } from 'src/app/common/models/column-info';
// import { StorageKeys, StorageService } from 'src/app/services/storage.service';
import { Spell } from 'src/app/spells/models/spell';

@Component({
  selector: 'app-spell-tables',
  templateUrl: './spell-tables.component.html',
  styleUrls: ['./spell-tables.component.scss']
})
export class SpellTablesComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() public spells: Spell[] = [];
  public displayedColumns: string[] = [];
  public columns: ColumnInfo[] = this.generateInitialColumns();
  public dataSource!: MatTableDataSource<Spell>;

  @Output() isLoading = new EventEmitter<boolean>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    // private storage: StorageService
  ) { }

  ngOnInit(): void {
    // const storedColumns = this.storage.getData<ColumnInfo[]>(StorageKeys.ColumnInfo);
    // if(storedColumns) {
    //   this.columns = storedColumns;
    // }
    this.refreshDisplayedColumns();
    this.isLoading.emit(true);
    this.dataSource = new MatTableDataSource<Spell>([]);
  }

  ngOnChanges(simpleChanges: SimpleChanges): void {
    if (simpleChanges.spells && this.dataSource) {
      this.dataSource.data = simpleChanges.spells.currentValue;
    }
  }

  ngAfterViewInit() {
    this.paginator.pageSize = 10;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.data = this.spells;
  }

  isArray(data: any): boolean {
    return Array.isArray(data);
  }

  isBoolean(data: any): boolean {
    return data === true || data === false;
  }

  finishLoading(): void {
    const hasData = !!(this.dataSource && this.dataSource.data && this.dataSource.data.length > 0);
    this.isLoading.emit(!hasData);
  }

  toggleColumn(column: ColumnInfo): void {
    column.isShown = !column.isShown;
    this.refreshDisplayedColumns();
    // this.storage.setData(StorageKeys.ColumnInfo, this.columns.slice());
  }

  stopPropagation($event: Event) {
    $event.stopPropagation();
  }

  private refreshDisplayedColumns(): void {
    this.displayedColumns = this.columns
      .filter(c => c.isShown)
      .map(c => c.name);
  }

  private generateInitialColumns(): ColumnInfo[] {
    return [
      {
        name: 'name',
        isShown: true,
        position: 1
      },
      {
        name: 'level',
        isShown: true,
        position: 2
      },
      {
        name: 'time',
        isShown: false,
        position: 3
      },
      {
        name: 'duration',
        isShown: true,
        position: 4
      },
      {
        name: 'range',
        isShown: true,
        position: 5
      },
      {
        name: 'components',
        isShown: false,
        position: 6
      },
      {
        name: 'school',
        isShown: true,
        position: 7
      },
      {
        name: 'classes',
        isShown: false,
        position: 8
      },
      {
        name: 'ritual',
        isShown: false,
        position: 9
      },
      {
        name: 'sources',
        isShown: false,
        position: 10
      },
    ];
  }
}
