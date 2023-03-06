import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffBirthComponent } from './staff-birth.component';

describe('StaffBirthComponent', () => {
  let component: StaffBirthComponent;
  let fixture: ComponentFixture<StaffBirthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffBirthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffBirthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
