import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentStrengthReportComponent } from './student-strength-report.component';

describe('StudentStrengthReportComponent', () => {
  let component: StudentStrengthReportComponent;
  let fixture: ComponentFixture<StudentStrengthReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentStrengthReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentStrengthReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
