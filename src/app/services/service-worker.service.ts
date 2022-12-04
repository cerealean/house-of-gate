import { ApplicationRef, Injectable } from '@angular/core';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { SwUpdate } from '@angular/service-worker';
import { interval, concat, Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MonsterDataService } from '../data/services/monsters/monster-data.service';
import { SpellDataService } from '../data/services/spells/spell-data.service';
import { StorageKeys, StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceWorkerService {

  private readonly subscriptions = new Subscription();

  constructor(
    private readonly storage: StorageService,
    private readonly monsterData: MonsterDataService,
    private readonly spellData: SpellDataService,
    private readonly updates: SwUpdate,
    private readonly appRef: ApplicationRef,
    private readonly snackBar: MatSnackBar
  ) {
    if (environment.production) {
      this.setupUpdateActions();
      this.setupUpdateChecks();
      (window as any).sunshine = {
        checkForUpdate: () => updates.checkForUpdate()
      };
    }
  }

  private setupUpdateActions() {
    this.updates.versionUpdates.subscribe(evt => {
      if(evt.type === 'VERSION_DETECTED') {
      } else if (evt.type === 'VERSION_READY') {
        const snackbar = this.snackBar.open('An update is available! Reload the app?', 'Update!');
        snackbar.onAction().subscribe(() => {
          snackbar.instance.data.action = 'Updating...';
          this.updates.activateUpdate().then(() => {
            this.storage.clearData(StorageKeys.EncounterFilters);
            this.storage.clearData(StorageKeys.MonsterFilters);
            this.storage.clearData(StorageKeys.SpellFilters);
            this.storage.clearData(StorageKeys.EncounterGeneratorMonsterFilters);
            this.storage.clearData(StorageKeys.PreviouslyGeneratedEncounters);
            Promise.all([
              this.monsterData.clearMonsters(),
              this.spellData.clearSpells()
            ]).finally(() => {
              document.location.reload();
            });
          });
        });
      }
    });
    const available$ = this.updates.available.subscribe(() => {
      const snackbar = this.snackBar.open('An update is available! Reload the app?', 'Update!');
      const action$ = snackbar.onAction().subscribe(() => {
        snackbar.instance.data.action = 'Updating...';
        this.updates.activateUpdate().then(() => {
          this.storage.clearData(StorageKeys.EncounterFilters);
          this.storage.clearData(StorageKeys.MonsterFilters);
          this.storage.clearData(StorageKeys.SpellFilters);
          this.storage.clearData(StorageKeys.EncounterGeneratorMonsterFilters);
          this.storage.clearData(StorageKeys.PreviouslyGeneratedEncounters);
          Promise.all([
            this.monsterData.clearMonsters(),
            this.spellData.clearSpells()
          ]).finally(() => {
            document.location.reload();
          });
        });
      });
      this.subscriptions.add(action$);
    });

    const activated$ = this.updates.activated.subscribe(() => {
      const updatedMessage = `The app has finished updating. Search filters have been reset to ensure data compatibility.`;
      this.snackBar.open(updatedMessage, 'Ok');
    });

    this.subscriptions.add(available$);
    this.subscriptions.add(activated$);
  }

  private setupUpdateChecks() {
    const appIsStable$ = this.appRef.isStable.pipe(first(isStable => isStable === true));
    const everyThreeHours$ = interval(1.08e+7);
    const everyThreeHoursOnceAppIsStable$ = concat(appIsStable$, everyThreeHours$);
    const checkForUpdates$ = everyThreeHoursOnceAppIsStable$.subscribe(() => this.updates.checkForUpdate());
    this.subscriptions.add(checkForUpdates$);
    appIsStable$.subscribe(() => this.updates.checkForUpdate());
  }
}
