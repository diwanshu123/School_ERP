import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertEmpComponent } from './cert-emp.component';

describe('CertEmpComponent', () => {
  let component: CertEmpComponent;
  let fixture: ComponentFixture<CertEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertEmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
