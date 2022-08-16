import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePRoductComponent } from './create-product.component';

describe('CreatePRoductComponent', () => {
  let component: CreatePRoductComponent;
  let fixture: ComponentFixture<CreatePRoductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePRoductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePRoductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
