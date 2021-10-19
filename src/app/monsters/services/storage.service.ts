import { Injectable } from '@angular/core';
import { ColumnInfo } from '../models/column-info';
import { GeneratedEncounter } from '../models/encounter';
import { EncounterRequest } from '../models/encounter-request';
import { MonsterFilters } from '../models/monster-filters';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public clearAllData(): void {
    localStorage.clear();
  }

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

  public clearFilterData(): void {
    this.clearStorage(StorageKeys.FilterInfo);
  }

  public getPreviouslyGeneratedEncounters(): GeneratedEncounter[] | null {
    return this.getFromLocalStorageAndParse<GeneratedEncounter[] | null>(StorageKeys.PreviouslyGeneratedEncounters);
  }

  public setPreviouslyGeneratedEncounters(encounters: GeneratedEncounter[]): void {
    this.stringifyAndStore(StorageKeys.PreviouslyGeneratedEncounters, encounters);
  }

  public clearPreviouslyGeneratedEncounters(): void {
    this.clearStorage(StorageKeys.PreviouslyGeneratedEncounters);
  }

  public getEncounterFilters(): EncounterRequest | null {
    return this.getFromLocalStorageAndParse<EncounterRequest | null>(StorageKeys.EncounterFilters);
  }

  public setEncounterFilters(encounterRequest: EncounterRequest): void {
    this.stringifyAndStore(StorageKeys.EncounterFilters, encounterRequest);
  }

  public clearEncounterFilters(): void {
    this.clearStorage(StorageKeys.EncounterFilters);
  }

  public getTermsAcknowledgementDate(): string | null {
    return this.getFromLocalStorageAndParse<string | null>(StorageKeys.HasAcknowledgedTermsDate);
  }

  public setTermsAcknowledgementDate(date: Date): void {
    this.stringifyAndStore(StorageKeys.HasAcknowledgedTermsDate, date.toUTCString());
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

  private clearStorage(key: string) {
    localStorage.removeItem(key);
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
  EncounterFilters = 'HoG-EncounterFilters',
  HasAcknowledgedTermsDate = 'HoG-TermsAcknowledgement'
}
