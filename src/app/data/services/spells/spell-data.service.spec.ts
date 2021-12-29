import { TestBed } from '@angular/core/testing';

import { SpellDataService } from './spell-data.service';

describe('SpellDataService', () => {
  let service: SpellDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpellDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
