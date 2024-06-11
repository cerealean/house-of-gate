import { AsyncPipe } from "@angular/common";
import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatIconButton } from "@angular/material/button";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatIcon } from "@angular/material/icon";
import { MatInput } from "@angular/material/input";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
} from "@angular/material/menu";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinner } from "@angular/material/progress-spinner";
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
import type { ColumnInfo } from "src/app/common/models/column-info";
import type { Item } from "src/app/data/models/i-item";
import { StorageKeys, StorageService } from "src/app/services/storage.service";

@Component({
  selector: "app-items",
  standalone: true,
  imports: [
    MatTable,
    MatIcon,
    MatIconButton,
    MatPaginatorModule,
    MatMenuModule,
    MatMenuTrigger,
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
    MatMenuItem,
    MatProgressSpinner,
    MatFormField,
    MatLabel,
    MatInput,
    AsyncPipe
],
  templateUrl: "./items.component.html",
  styleUrl: "./items.component.scss",
})
export class ItemsComponent implements OnInit, AfterViewInit {
  public readonly items$ = import("../../data/static/items").then(i => i.items);
  public readonly dataSource = new MatTableDataSource<Item>([]);
  public readonly columns: ColumnInfo[] = [
    { name: "name", isShown: true, position: 1 },
    { name: "text", isShown: true, position: 2 },
    { name: "weight", isShown: true, position: 3 },
    { name: "sources", isShown: true, position: 4 },
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public displayedColumns: string[] = [];

  constructor(private readonly storage: StorageService) {}

  ngOnInit(): void {
    this.refreshDisplayedColumns();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.items$.then(i => (this.dataSource.data = i));
  }

  toggleColumn(column: ColumnInfo): void {
    column.isShown = !column.isShown;
    this.refreshDisplayedColumns();
    this.storage.setData(StorageKeys.ColumnInfoItems, this.columns.slice());
  }

  isArray(data: any): boolean {
    return Array.isArray(data);
  }

  stopPropagation($event: Event) {
    $event.stopPropagation();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private refreshDisplayedColumns(): void {
    this.displayedColumns = this.columns
      .filter(c => c.isShown)
      .map(c => c.name);
  }
}
