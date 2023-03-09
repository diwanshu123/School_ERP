import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlClassComponent } from './control-class.component';

describe('ControlClassComponent', () => {
  let component: ControlClassComponent;
  let fixture: ComponentFixture<ControlClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
