import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryAssignComponent } from './salary-assign.component';

describe('SalaryAssignComponent', () => {
  let component: SalaryAssignComponent;
  let fixture: ComponentFixture<SalaryAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryAssignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
