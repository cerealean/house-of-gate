import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { StorageKeys, StorageService } from 'src/app/services/storage.service';
import { ColumnInfo } from '../models/column-info';

@Injectable({
  providedIn: 'root'
})
export class ColumnManagerService {

  private _columns: ColumnInfo[];

  private _columnUpdates$ = new ReplaySubject<{
    updated: ColumnInfo | null,
    allColumns: ColumnInfo[],
    shownColumns: ColumnInfo[]
  }>(20);

  public columnUpdates$ = this._columnUpdates$.asObservable();

  public get shownColumns(): ColumnInfo[] {
    return this._columns.filter(c => c.isShown === true);
  }

  public get columns(): ColumnInfo[] {
    return this._columns.slice();
  }

  constructor(private storage: StorageService) {
    const storedColumns = this.storage.getData<ColumnInfo[]>(StorageKeys.ColumnInfo);
    this._columns = storedColumns ?? this.generateInitialColumns();
    this.publishUpdate(null);
  }

  public patchColumn(columnInfo: ColumnInfo) {
    if(!columnInfo) {
      throw new Error('patchColumn requires a value, however a falsy value was provided');
    }
    const column = this._columns.find(c => c.name === columnInfo.name);
    if(!column) {
      throw new Error(`Column ${columnInfo.name} not found`);
    }

    column.isShown = columnInfo.isShown;
    column.position = columnInfo.position;
    this.publishUpdate(column);
    this.storage.setData(StorageKeys.ColumnInfo, this.columns.slice());
  }

  private publishUpdate(columnInfo: ColumnInfo | null): void {
    this._columnUpdates$.next({
      updated: columnInfo,
      allColumns: this._columns.slice(),
      shownColumns: this.shownColumns
    });
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
