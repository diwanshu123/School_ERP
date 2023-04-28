import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardianAppComponent } from './guardian-app.component';

describe('GuardianAppComponent', () => {
  let component: GuardianAppComponent;
  let fixture: ComponentFixture<GuardianAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardianAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardianAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
