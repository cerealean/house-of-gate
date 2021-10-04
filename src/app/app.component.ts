import { OnDestroy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { TermsAcknowledgementService } from './monsters/services/terms-acknowledgement.service';
import { MatDialog } from '@angular/material/dialog';
import { InitializationNoticeComponent } from './components/initialization-notice/initialization-notice.component';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public hasAcknowledgedTerms = false;
  public readonly currentYear = new Date().getFullYear();
  private readonly subscriptions = new Subscription();

  constructor(
    private readonly termsService: TermsAcknowledgementService,
    private readonly matDialog: MatDialog,
    private readonly router: Router
  ) {}

  async ngOnInit() {
    this.hasAcknowledgedTerms = this.termsService.hasAcknowledgedTerms();
    if (!this.hasAcknowledgedTerms) {
      const ref = this.matDialog.open(InitializationNoticeComponent);
      const sub$ = ref.afterClosed().subscribe(async (hasAcknowledged) => {
        this.hasAcknowledgedTerms = hasAcknowledged;
        await this.router.navigate(['monsters']);
        if (hasAcknowledged) {
          sub$?.unsubscribe();
        }
      });
      this.subscriptions.add(sub$);
    } else {
      await this.router.navigate(['monsters']);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions?.unsubscribe();
  }

}
