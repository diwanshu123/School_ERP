import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuParentInfoComponent } from './stu-parent-info.component';

describe('StuParentInfoComponent', () => {
  let component: StuParentInfoComponent;
  let fixture: ComponentFixture<StuParentInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuParentInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuParentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
