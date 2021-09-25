import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class TermsAcknowledgementService {
  private hasAcknowledged = false;

  constructor(private readonly storage: StorageService) {
    const hasAlreadyAcknowledgedDateString = storage.getTermsAcknowledgementDate();
    if(hasAlreadyAcknowledgedDateString) {
      const hasAcknowledgedDate = new Date(hasAlreadyAcknowledgedDateString);
      const termsLastUpdated = new Date(environment.termsLastUpdatedDate);

      this.hasAcknowledged = hasAcknowledgedDate > termsLastUpdated;
    }
  }

  hasAcknowledgedTerms(): boolean {
    return this.hasAcknowledged;
  }

  setHasAcknowledgedTerms(date = new Date()): void {
    this.storage.setTermsAcknowledgementDate(date);
    this.hasAcknowledged = true;
  }
}
