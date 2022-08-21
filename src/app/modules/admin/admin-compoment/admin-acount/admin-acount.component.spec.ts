import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAcountComponent } from './admin-acount.component';

describe('AdminAcountComponent', () => {
  let component: AdminAcountComponent;
  let fixture: ComponentFixture<AdminAcountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAcountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
