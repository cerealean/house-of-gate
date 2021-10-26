import { ApplicationRef, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';
import { interval, concat, Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { StorageKeys, StorageService } from '../monsters/services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceWorkerService {

  private readonly subscriptions = new Subscription();

  constructor(
    private readonly storage: StorageService,
    updates: SwUpdate,
    appRef: ApplicationRef,
    snackBar: MatSnackBar
  ) {
    if (environment.production) {
      this.setupUpdateActions(updates, snackBar);
      this.setupUpdateChecks(appRef, updates);
      (window as any).sunshine = {
        checkForUpdate: () => updates.checkForUpdate()
      };
    }
  }

  private setupUpdateActions(updates: SwUpdate, _snackBar: MatSnackBar) {
    const available$ = updates.available.subscribe(() => {
      const snackbar = _snackBar.open('An update is available! Reload the app?', 'Update!');
      const action$ = snackbar.onAction().subscribe(() => {
        updates.activateUpdate().then(() => {
          this.storage.clearData(StorageKeys.EncounterFilters);
          this.storage.clearData(StorageKeys.MonsterFilters);
          this.storage.clearData(StorageKeys.EncounterGeneratorMonsterFilters);
          this.storage.clearData(StorageKeys.PreviouslyGeneratedEncounters);
          document.location.reload();
        });
      });
      this.subscriptions.add(action$);
    });

    const activated$ = updates.activated.subscribe(() => {
      const updatedMessage = `The app has finished updating. Search filters have been reset to ensure data compatibility.`;
      _snackBar.open(updatedMessage, 'Ok');
    });

    this.subscriptions.add(available$);
    this.subscriptions.add(activated$);
  }

  private setupUpdateChecks(appRef: ApplicationRef, updates: SwUpdate) {
    const appIsStable$ = appRef.isStable.pipe(first(isStable => isStable === true));
    const everyThreeHours$ = interval(1.08e+7);
    const everyThreeHoursOnceAppIsStable$ = concat(appIsStable$, everyThreeHours$);
    const checkForUpdates$ = everyThreeHoursOnceAppIsStable$.subscribe(() => updates.checkForUpdate());
    this.subscriptions.add(checkForUpdates$);
    appIsStable$.subscribe(() => updates.checkForUpdate());
  }
}
