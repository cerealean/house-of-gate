import { TestBed } from '@angular/core/testing';

import { EncounterDataService } from './encounter-data.service';

describe('EncounterDataService', () => {
  let service: EncounterDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncounterDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
