import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisturbutionComponent } from './disturbution.component';

describe('DisturbutionComponent', () => {
  let component: DisturbutionComponent;
  let fixture: ComponentFixture<DisturbutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisturbutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisturbutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
