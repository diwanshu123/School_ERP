import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeRangeComponent } from './grade-range.component';

describe('GradeRangeComponent', () => {
  let component: GradeRangeComponent;
  let fixture: ComponentFixture<GradeRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeRangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradeRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
