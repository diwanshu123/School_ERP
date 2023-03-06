import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudBirthComponent } from './stud-birth.component';

describe('StudBirthComponent', () => {
  let component: StudBirthComponent;
  let fixture: ComponentFixture<StudBirthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudBirthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudBirthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
