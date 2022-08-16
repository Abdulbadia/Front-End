import { TestBed } from '@angular/core/testing';

import { ApiBrandService } from './api-brand.service';

describe('ApiBrandService', () => {
  let service: ApiBrandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiBrandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
