
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import { MatIconButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { MatMenu, MatMenuItem, MatMenuTrigger } from "@angular/material/menu";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort, MatSortHeader } from "@angular/material/sort";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource,
} from "@angular/material/table";
import { ColumnInfo } from "src/app/common/models/column-info";
import type { Monster } from "src/app/components/monsters/models/monster";
import { StorageKeys, StorageService } from "src/app/services/storage.service";

@Component({
  selector: "app-monster-tables",
  templateUrl: "./monster-tables.component.html",
  styleUrls: ["./monster-tables.component.scss"],
  standalone: true,
  imports: [
    MatIconButton,
    MatMenuTrigger,
    MatIcon,
    MatTable,
    MatSort,
    MatColumnDef,
    MatHeaderCellDef,
    MatHeaderCell,
    MatSortHeader,
    MatCellDef,
    MatCell,
    MatHeaderRowDef,
    MatHeaderRow,
    MatRowDef,
    MatRow,
    MatPaginator,
    MatMenu,
    MatMenuItem
],
})
export class MonsterTablesComponent
  implements OnInit, AfterViewInit, OnChanges
{
  @Input() public monsters: Monster[] = [];
  public displayedColumns: string[] = [];
  public columns: ColumnInfo[] = this.generateInitialColumns();
  public dataSource!: MatTableDataSource<Monster>;

  @Output() isLoading = new EventEmitter<boolean>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private storage: StorageService) {}

  ngOnInit(): void {
    const storedColumns = this.storage.getData<ColumnInfo[]>(
      StorageKeys.ColumnInfo
    );
    if (storedColumns) {
      this.columns = storedColumns;
    }
    this.refreshDisplayedColumns();
    this.isLoading.emit(true);
    this.dataSource = new MatTableDataSource<Monster>([]);
  }

  ngOnChanges(simpleChanges: SimpleChanges): void {
    if (simpleChanges?.monsters && this.dataSource) {
      this.dataSource.data = simpleChanges.monsters.currentValue;
    }
  }

  ngAfterViewInit() {
    this.paginator.pageSize = 10;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.data = this.monsters;
  }

  isArray(data: any): boolean {
    return Array.isArray(data);
  }

  finishLoading(): void {
    const hasData = !!(this.dataSource && this.dataSource.data);
    this.isLoading.emit(!hasData);
  }

  toggleColumn(column: ColumnInfo): void {
    column.isShown = !column.isShown;
    this.refreshDisplayedColumns();
    this.storage.setData(StorageKeys.ColumnInfo, this.columns.slice());
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
        name: "name",
        isShown: true,
        position: 1,
      },
      {
        name: "cr",
        isShown: true,
        position: 2,
      },
      {
        name: "hp",
        isShown: false,
        position: 3,
      },
      {
        name: "ac",
        isShown: false,
        position: 4,
      },
      {
        name: "size",
        isShown: false,
        position: 5,
      },
      {
        name: "type",
        isShown: true,
        position: 6,
      },
      {
        name: "environment",
        isShown: false,
        position: 7,
      },
      {
        name: "alignment",
        isShown: false,
        position: 8,
      },
      {
        name: "legendary",
        isShown: false,
        position: 9,
      },
      {
        name: "unique",
        isShown: false,
        position: 10,
      },
      {
        name: "sources",
        isShown: true,
        position: 11,
      },
    ];
  }
}
