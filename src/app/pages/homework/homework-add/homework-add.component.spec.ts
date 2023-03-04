import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkAddComponent } from './homework-add.component';

describe('HomeworkAddComponent', () => {
  let component: HomeworkAddComponent;
  let fixture: ComponentFixture<HomeworkAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeworkAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeworkAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
