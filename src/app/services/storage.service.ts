import { Injectable } from '@angular/core';
import { ColumnInfo } from '../models/column-info';
import { EncounterRequest } from '../models/encounter-request';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public clearAllData(): void {
    localStorage.clear();
  }

  public getData<T>(key: StorageKeys): T | null {
    return this.getFromLocalStorageAndParse<T>(key);
  }

  public setData(key: StorageKeys, data: any): void {
    this.stringifyAndStore(key, data);
  }

  public clearData(key: StorageKeys): void {
    this.clearStorage(key);
  }

  /**
 * @deprecated Use get, set, or clear instead
 */
  public getColumnData(): ColumnInfo[] | null {
    return this.getFromLocalStorageAndParse<ColumnInfo[] | null>(StorageKeys.ColumnInfo);
  }

  /**
 * @deprecated Use get, set, or clear instead
 */
  public setColumnData(columns: ColumnInfo[]) {
    this.stringifyAndStore(StorageKeys.ColumnInfo, columns);
  }

  /**
 * @deprecated Use get, set, or clear instead
 */
  public getEncounterFilters(): EncounterRequest | null {
    return this.getFromLocalStorageAndParse<EncounterRequest | null>(StorageKeys.EncounterFilters);
  }

  /**
 * @deprecated Use get, set, or clear instead
 */
  public setEncounterFilters(encounterRequest: EncounterRequest): void {
    this.stringifyAndStore(StorageKeys.EncounterFilters, encounterRequest);
  }

  /**
 * @deprecated Use get, set, or clear instead
 */
  public clearEncounterFilters(): void {
    this.clearStorage(StorageKeys.EncounterFilters);
  }

  /**
   * @deprecated Use get, set, or clear instead
   */
  public getTermsAcknowledgementDate(): string | null {
    return this.getFromLocalStorageAndParse<string | null>(StorageKeys.HasAcknowledgedTermsDate);
  }

  /**
   * @deprecated Use get, set, or clear instead
   */
  public setTermsAcknowledgementDate(date: Date): void {
    this.stringifyAndStore(StorageKeys.HasAcknowledgedTermsDate, date.toUTCString());
  }

  private getFromLocalStorageAndParse<T>(key: string): T | null {
    try {
      const storedJsonString = localStorage.getItem(key);
      if (storedJsonString) {
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
    if (!value) {
      throw new Error('Object to store must be a valid object and cannot be null or empty');
    }
    const stringifiedObject = JSON.stringify(value);
    if (stringifiedObject) {
      localStorage.setItem(key, stringifiedObject);
    }
  }
}

export enum StorageKeys {
  ColumnInfo = 'HoG-ColumnInfo',
  PreviouslyGeneratedEncounters = 'HoG-PreviouslyGeneratedEncounters',
  EncounterFilters = 'HoG-EncounterFilters',
  HasAcknowledgedTermsDate = 'HoG-TermsAcknowledgement',
  MonsterFilters = 'HoG-MonsterFilters',
  EncounterGeneratorMonsterFilters = 'HoG-EGMonsterFilters'
}
