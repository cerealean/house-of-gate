import { Component, OnInit } from '@angular/core';
import { TermsAcknowledgementService } from 'src/app/services/terms-acknowledgement.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-initialization-notice',
  templateUrl: './initialization-notice.component.html',
  styleUrls: ['./initialization-notice.component.scss']
})
export class InitializationNoticeComponent {

  public readonly termsLastUpdated = new Date(environment.termsLastUpdatedDate);

  constructor(private readonly termsAcknowledgement: TermsAcknowledgementService) { }

  public acknowledgeTerms(): void {
    this.termsAcknowledgement.setHasAcknowledgedTerms();
  }

}
