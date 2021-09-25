import { TestBed } from '@angular/core/testing';

import { EncounterGeneratorService } from './encounter-generator.service';

describe('EncounterGeneratorService', () => {
  let service: EncounterGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncounterGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
