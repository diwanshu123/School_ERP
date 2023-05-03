import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuInfoExamResultComponent } from './stu-info-exam-result.component';

describe('StuInfoExamResultComponent', () => {
  let component: StuInfoExamResultComponent;
  let fixture: ComponentFixture<StuInfoExamResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuInfoExamResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuInfoExamResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
