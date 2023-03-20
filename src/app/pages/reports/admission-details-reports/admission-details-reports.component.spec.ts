import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionDetailsReportsComponent } from './admission-details-reports.component';

describe('AdmissionDetailsReportsComponent', () => {
  let component: AdmissionDetailsReportsComponent;
  let fixture: ComponentFixture<AdmissionDetailsReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionDetailsReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmissionDetailsReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
