import { Component } from '@angular/core';
import { ServiceWorkerService } from './services/service-worker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public readonly currentYear = new Date().getFullYear();

  constructor(
    private readonly _serviceWorker: ServiceWorkerService
  ) { }

}
