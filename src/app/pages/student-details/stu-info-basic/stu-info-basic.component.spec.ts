import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuInfoBasicComponent } from './stu-info-basic.component';

describe('StuInfoBasicComponent', () => {
  let component: StuInfoBasicComponent;
  let fixture: ComponentFixture<StuInfoBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuInfoBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuInfoBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
