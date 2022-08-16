import { TestBed } from '@angular/core/testing';

import { ApiDiscountService } from './api-discount.service';

describe('ApiDiscountService', () => {
  let service: ApiDiscountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDiscountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
