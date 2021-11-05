import { TestBed } from '@angular/core/testing';

import { EncounterGenerator2Service } from './encounter-generator-2.service';

describe('EncounterGenerator2Service', () => {
  let service: EncounterGenerator2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncounterGenerator2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
