import { TestBed } from '@angular/core/testing';

import { DateDATAService } from './date-data.service';

describe('DateDATAService', () => {
  let service: DateDATAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateDATAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
