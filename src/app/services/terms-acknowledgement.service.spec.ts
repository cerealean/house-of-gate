import { TestBed } from '@angular/core/testing';

import { TermsAcknowledgementService } from './terms-acknowledgement.service';

describe('TermsAcknowledgementService', () => {
  let service: TermsAcknowledgementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TermsAcknowledgementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
