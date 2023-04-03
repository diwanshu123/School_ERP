import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamSetupEditComponent } from './exam-setup-edit.component';

describe('ExamSetupEditComponent', () => {
  let component: ExamSetupEditComponent;
  let fixture: ComponentFixture<ExamSetupEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamSetupEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamSetupEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
