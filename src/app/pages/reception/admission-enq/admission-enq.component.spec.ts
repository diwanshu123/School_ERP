import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionEnqComponent } from './admission-enq.component';

describe('AdmissionEnqComponent', () => {
  let component: AdmissionEnqComponent;
  let fixture: ComponentFixture<AdmissionEnqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionEnqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmissionEnqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
