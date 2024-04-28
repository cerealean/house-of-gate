import { Injectable } from '@angular/core';

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

export const enum StorageKeys {
  ColumnInfo = 'HoG-ColumnInfo',
  ColumnInfoItems = 'HoG-ColumnInfoItems',
  PreviouslyGeneratedEncounters = 'HoG-PreviouslyGeneratedEncounters',
  EncounterFilters = 'HoG-EncounterFilters',
  HasAcknowledgedTermsDate = 'HoG-TermsAcknowledgement',
  MonsterFilters = 'HoG-MonsterFilters',
  SpellFilters = 'HoG-SpellFilters',
  EncounterGeneratorMonsterFilters = 'HoG-EGMonsterFilters'
}
