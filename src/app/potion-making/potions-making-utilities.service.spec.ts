import { TestBed } from '@angular/core/testing';

import { PotionsMakingUtilitiesService } from './potions-making-utilities.service';

describe('PotionsMakingUtilitiesService', () => {
  let service: PotionsMakingUtilitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PotionsMakingUtilitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
