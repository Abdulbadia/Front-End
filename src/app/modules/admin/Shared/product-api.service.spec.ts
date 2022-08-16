import { TestBed } from '@angular/core/testing';

import { ProductAPiService } from './product-api.service';

describe('ProductAPiService', () => {
  let service: ProductAPiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductAPiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
