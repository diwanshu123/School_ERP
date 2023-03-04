import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertStudComponent } from './cert-stud.component';

describe('CertStudComponent', () => {
  let component: CertStudComponent;
  let fixture: ComponentFixture<CertStudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertStudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertStudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
