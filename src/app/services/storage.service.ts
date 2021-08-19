import { Injectable } from '@angular/core';
import { ColumnInfo } from '../models/column-info';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public getColumnData(): ColumnInfo[] | null {
    return this.getFromLocalStorageAndParse<ColumnInfo[] | null>(StorageKeys.ColumnInfo);
  }

  public setColumnData(columns: ColumnInfo[]) {
    this.stringifyAndStore(StorageKeys.ColumnInfo, columns);
  }

  private getFromLocalStorageAndParse<T>(key: string): T | null {
    try {
      const storedJsonString = localStorage.getItem(key);
      if(storedJsonString) {
        return JSON.parse(storedJsonString);
      }
      return null;
    } catch (error) {
      return null;
    }
  }

  private stringifyAndStore(key: string, value: Object): void {
    if(!value) {
      throw new Error('Object to store must be a valid object and cannot be null or empty');
    }
    const stringifiedObject = JSON.stringify(value);
    if(stringifiedObject) {
      localStorage.setItem(key, stringifiedObject);
    }
  }
}

enum StorageKeys {
  ColumnInfo = 'HoG-ColumnInfo'
}
