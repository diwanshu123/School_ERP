import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvalReportComponent } from './eval-report.component';

describe('EvalReportComponent', () => {
  let component: EvalReportComponent;
  let fixture: ComponentFixture<EvalReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvalReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
