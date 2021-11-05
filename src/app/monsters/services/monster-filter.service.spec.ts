import { TestBed } from '@angular/core/testing';

import { MonsterFilterService } from './monster-filter.service';

describe('MonsterFilterService', () => {
  let service: MonsterFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonsterFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
