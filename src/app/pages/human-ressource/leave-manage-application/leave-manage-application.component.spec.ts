import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveManageApplicationComponent } from './leave-manage-application.component';

describe('LeaveManageApplicationComponent', () => {
  let component: LeaveManageApplicationComponent;
  let fixture: ComponentFixture<LeaveManageApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveManageApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveManageApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
