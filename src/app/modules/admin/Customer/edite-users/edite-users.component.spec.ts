import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeUsersComponent } from './edite-users.component';

describe('EditeUsersComponent', () => {
  let component: EditeUsersComponent;
  let fixture: ComponentFixture<EditeUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
