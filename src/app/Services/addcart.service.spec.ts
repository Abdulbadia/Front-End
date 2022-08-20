import { TestBed } from '@angular/core/testing';

import { AddcartService } from './addcart.service';

describe('AddcartService', () => {
  let service: AddcartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddcartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
