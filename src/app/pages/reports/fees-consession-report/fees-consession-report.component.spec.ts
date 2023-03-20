import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesConsessionReportComponent } from './fees-consession-report.component';

describe('FeesConsessionReportComponent', () => {
  let component: FeesConsessionReportComponent;
  let fixture: ComponentFixture<FeesConsessionReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeesConsessionReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeesConsessionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
