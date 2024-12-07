import { Component } from '@angular/core';
import { ServiceWorkerService } from './services/service-worker.service';
import { FooterComponent } from './components/footer/footer.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatNavList, MatListSubheaderCssMatStyler, MatListItem, MatListItemTitle, MatListItemMeta } from '@angular/material/list';
import { FlexModule } from '@ngbracket/ngx-layout/flex';
import { MatSidenavContainer, MatSidenav, MatSidenavContent } from '@angular/material/sidenav';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [
        MatSidenavContainer,
        FlexModule,
        MatSidenav,
        MatNavList,
        MatListSubheaderCssMatStyler,
        MatListItem,
        RouterLink,
        MatListItemTitle,
        MatIconButton,
        MatListItemMeta,
        MatIcon,
        MatSidenavContent,
        ToolbarComponent,
        RouterOutlet,
        FooterComponent,
    ]
})
export class AppComponent {
  constructor(
    private readonly _serviceWorker: ServiceWorkerService
  ) { }
}
