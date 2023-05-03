import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudVehicleRouteComponent } from './stud-vehicle-route.component';

describe('StudVehicleRouteComponent', () => {
  let component: StudVehicleRouteComponent;
  let fixture: ComponentFixture<StudVehicleRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudVehicleRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudVehicleRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
