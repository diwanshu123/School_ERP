import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryTempleteComponent } from './salary-templete.component';

describe('SalaryTempleteComponent', () => {
  let component: SalaryTempleteComponent;
  let fixture: ComponentFixture<SalaryTempleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryTempleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryTempleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
