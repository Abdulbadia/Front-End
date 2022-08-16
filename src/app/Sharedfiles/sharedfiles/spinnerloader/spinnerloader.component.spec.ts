import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerloaderComponent } from './spinnerloader.component';

describe('SpinnerloaderComponent', () => {
  let component: SpinnerloaderComponent;
  let fixture: ComponentFixture<SpinnerloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinnerloaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
