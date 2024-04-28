import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Item } from '../data/models/i-item';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ColumnInfo } from '../common/models/column-info';
import { MatSort } from '@angular/material/sort';
import { StorageKeys, StorageService } from '../services/storage.service';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    NgIf,
    NgFor,
    AsyncPipe
  ],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss'
})
export class ItemsComponent implements OnInit, AfterViewInit {
  public readonly items$ = import('../data/static/items')
    .then(i => this.dataSource.data = i.items);
  public readonly dataSource = new MatTableDataSource<Item>();
  public readonly columns: ColumnInfo[] = [
    { name: 'name', isShown: true, position: 1 },
    { name: 'text', isShown: true, position: 2 },
    { name: 'weight', isShown: true, position: 3 },
    { name: 'sources', isShown: true, position: 4 }
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public displayedColumns: string[] = [];

  constructor(private readonly storage: StorageService) { }

  ngOnInit(): void {
    this.refreshDisplayedColumns();
  }

  ngAfterViewInit(): void {
    this.paginator.pageSize = 10;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
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

  private refreshDisplayedColumns(): void {
    this.displayedColumns = this.columns
      .filter(c => c.isShown)
      .map(c => c.name);
  }
}
