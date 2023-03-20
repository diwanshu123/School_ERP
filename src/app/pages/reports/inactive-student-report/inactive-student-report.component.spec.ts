import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveStudentReportComponent } from './inactive-student-report.component';

describe('InactiveStudentReportComponent', () => {
  let component: InactiveStudentReportComponent;
  let fixture: ComponentFixture<InactiveStudentReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InactiveStudentReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InactiveStudentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
