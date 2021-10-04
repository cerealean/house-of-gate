import { ApplicationRef, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';
import { interval, concat, Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceWorkerService {

  private readonly subscriptions = new Subscription();

  constructor(updates: SwUpdate, appRef: ApplicationRef, _snackBar: MatSnackBar) {
    this.setupUpdateActions(updates, _snackBar);
    this.setupUpdateChecks(appRef, updates);
    (window as any).sunshine = {
      checkForUpdate: () => updates.checkForUpdate()
    };
  }

  private setupUpdateActions(updates: SwUpdate, _snackBar: MatSnackBar) {
    const available$ = updates.available.subscribe(() => {
      const snackbar = _snackBar.open('An update is available! Reload the app?', 'Update!');
      const action$ = snackbar.onAction().subscribe(() => {
        updates.activateUpdate().then(() => document.location.reload());
      });
      this.subscriptions.add(action$);
    });

    this.subscriptions.add(available$);
  }

  private setupUpdateChecks(appRef: ApplicationRef, updates: SwUpdate) {
    const appIsStable$ = appRef.isStable.pipe(first(isStable => isStable === true));
    const everyThreeHours$ = interval(1.08e+7);
    const everyThreeHoursOnceAppIsStable$ = concat(appIsStable$, everyThreeHours$);
    const checkForUpdates$ = everyThreeHoursOnceAppIsStable$.subscribe(() => updates.checkForUpdate());
    this.subscriptions.add(checkForUpdates$);
  }
}
