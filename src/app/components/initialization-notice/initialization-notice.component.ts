import { Component, OnInit } from '@angular/core';
import { TermsAcknowledgementService } from 'src/app/services/terms-acknowledgement.service';

@Component({
  selector: 'app-initialization-notice',
  templateUrl: './initialization-notice.component.html',
  styleUrls: ['./initialization-notice.component.scss']
})
export class InitializationNoticeComponent {

  constructor(private readonly termsAcknowledgement: TermsAcknowledgementService) { }

  public acknowledgeTerms(): void {
    this.termsAcknowledgement.setHasAcknowledgedTerms();
  }

}
