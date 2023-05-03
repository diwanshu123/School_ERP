import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudInfoBooksComponent } from './stud-info-books.component';

describe('StudInfoBooksComponent', () => {
  let component: StudInfoBooksComponent;
  let fixture: ComponentFixture<StudInfoBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudInfoBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudInfoBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
