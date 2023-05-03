import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudInfoPictureComponent } from './stud-info-picture.component';

describe('StudInfoPictureComponent', () => {
  let component: StudInfoPictureComponent;
  let fixture: ComponentFixture<StudInfoPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudInfoPictureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudInfoPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
