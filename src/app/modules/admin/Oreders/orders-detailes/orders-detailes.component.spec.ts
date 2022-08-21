import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailesComponent } from './orders-detailes.component';

describe('OrdersDetailesComponent', () => {
  let component: OrdersDetailesComponent;
  let fixture: ComponentFixture<OrdersDetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersDetailesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
