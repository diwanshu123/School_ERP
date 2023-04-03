import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopEditComponent } from './stop-edit.component';

describe('StopEditComponent', () => {
  let component: StopEditComponent;
  let fixture: ComponentFixture<StopEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StopEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StopEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
