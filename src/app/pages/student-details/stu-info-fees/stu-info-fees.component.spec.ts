import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuInfoFeesComponent } from './stu-info-fees.component';

describe('StuInfoFeesComponent', () => {
  let component: StuInfoFeesComponent;
  let fixture: ComponentFixture<StuInfoFeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuInfoFeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuInfoFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
