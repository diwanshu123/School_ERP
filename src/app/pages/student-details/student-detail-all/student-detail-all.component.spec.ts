import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDetailAllComponent } from './student-detail-all.component';

describe('StudentDetailAllComponent', () => {
  let component: StudentDetailAllComponent;
  let fixture: ComponentFixture<StudentDetailAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDetailAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDetailAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
