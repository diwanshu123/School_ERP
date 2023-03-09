import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassScheduleAddComponent } from './class-schedule-add.component';

describe('ClassScheduleAddComponent', () => {
  let component: ClassScheduleAddComponent;
  let fixture: ComponentFixture<ClassScheduleAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassScheduleAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassScheduleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
