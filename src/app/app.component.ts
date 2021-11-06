import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServiceWorkerService } from './services/service-worker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public readonly currentYear = new Date().getFullYear();

  constructor(
    private readonly _serviceWorker: ServiceWorkerService,
    private readonly _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    const snackBar = this._snackBar
      .open('Notice: This app is in beta and under development; features may change at any time. Thank you for using the app! Please direct any feedback to admin@houseofgate.com.', 'Dismiss');
  }

}
