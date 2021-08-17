import { TestBed } from '@angular/core/testing';

import { ColumnManagerService } from './column-manager.service';

describe('ColumnManagerService', () => {
  let service: ColumnManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColumnManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
