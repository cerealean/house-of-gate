import { trigger, state, style, transition, animate } from '@angular/animations';
import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatSort } from '@angular/material/sort';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { ColumnInfo } from 'src/app/common/models/column-info';
import { Spell } from 'src/app/spells/models/spell';

@Component({
  selector: 'app-spell-tables',
  templateUrl: './spell-tables.component.html',
  styleUrls: ['./spell-tables.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SpellTablesComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() public spells: Spell[] = [];
  public displayedColumns: string[] = [];
  public columns: ColumnInfo[] = this.generateInitialColumns();
  public dataSource!: MatTableDataSource<Spell>;
  public expandedElement?: Spell;

  @Output() isLoading = new EventEmitter<boolean>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
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
    const hasData = !!(this.dataSource && this.dataSource.data);
    this.isLoading.emit(!hasData);
  }

  toggleColumn(column: ColumnInfo): void {
    column.isShown = !column.isShown;
    this.refreshDisplayedColumns();
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
        name: 'concentration',
        isShown: false,
        position: 10
      },
      {
        name: 'sources',
        isShown: false,
        position: 11
      },
    ];
  }
}
