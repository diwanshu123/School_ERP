import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDesgComponent } from './emp-desg.component';

describe('EmpDesgComponent', () => {
  let component: EmpDesgComponent;
  let fixture: ComponentFixture<EmpDesgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpDesgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpDesgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
