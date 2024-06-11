import { Injectable } from '@angular/core';
import { CrInfo, crInfoData } from '../../data/static/cr-info';

@Injectable({
  providedIn: 'any'
})
export class MetaDataService {
  private readonly crInfoList = Object.values(crInfoData);
  constructor() { }

  public getCrInfoByCr(cr: number): CrInfo | undefined {
    return this.crInfoList.find(ci => ci.numeric === cr);
  }

  public getCrList(): CrInfo[] {
    return this.crInfoList.slice();
  }
}
