import { TestBed } from '@angular/core/testing';

import { ParfumsService } from './parfums.service';

describe('ParfumsService', () => {
  let service: ParfumsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParfumsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
