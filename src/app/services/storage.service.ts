import { Injectable } from '@angular/core';
import { ColumnInfo } from '../models/column-info';
import { Encounter } from '../models/encounter';
import { MonsterFilters } from '../models/monster-filters';

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

  public getFilterData(): MonsterFilters | null {
    return this.getFromLocalStorageAndParse<MonsterFilters | null>(StorageKeys.FilterInfo);
  }

  public setFilterData(filterData: MonsterFilters): void {
    this.stringifyAndStore(StorageKeys.FilterInfo, filterData);
  }

  public getPreviouslyGeneratedEncounters(): Encounter[] | null {
    return this.getFromLocalStorageAndParse<Encounter[] | null>(StorageKeys.PreviouslyGeneratedEncounters);
  }

  public setPreviouslyGeneratedEncounters(encounters: Encounter[]): void {
    this.stringifyAndStore(StorageKeys.PreviouslyGeneratedEncounters, encounters);
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
  ColumnInfo = 'HoG-ColumnInfo',
  FilterInfo = 'HoG-FilterInfo',
  PreviouslyGeneratedEncounters = 'HoG-PreviouslyGeneratedEncounters',
  EncounterFilters = 'HoG-EncounterFilters'
}
