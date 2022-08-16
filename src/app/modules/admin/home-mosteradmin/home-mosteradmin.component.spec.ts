import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMosteradminComponent } from './home-mosteradmin.component';

describe('HomeMosteradminComponent', () => {
  let component: HomeMosteradminComponent;
  let fixture: ComponentFixture<HomeMosteradminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMosteradminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMosteradminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
