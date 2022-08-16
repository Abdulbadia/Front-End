import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetialsComponent } from './product-detials.component';

describe('ProductDetialsComponent', () => {
  let component: ProductDetialsComponent;
  let fixture: ComponentFixture<ProductDetialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
