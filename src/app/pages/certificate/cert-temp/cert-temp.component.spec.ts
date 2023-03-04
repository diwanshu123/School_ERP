import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertTempComponent } from './cert-temp.component';

describe('CertTempComponent', () => {
  let component: CertTempComponent;
  let fixture: ComponentFixture<CertTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertTempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
