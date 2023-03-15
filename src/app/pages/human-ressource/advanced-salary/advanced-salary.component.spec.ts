import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedSalaryComponent } from './advanced-salary.component';

describe('AdvancedSalaryComponent', () => {
  let component: AdvancedSalaryComponent;
  let fixture: ComponentFixture<AdvancedSalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedSalaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
