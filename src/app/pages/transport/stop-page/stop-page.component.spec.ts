import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopPageComponent } from './stop-page.component';

describe('StopPageComponent', () => {
  let component: StopPageComponent;
  let fixture: ComponentFixture<StopPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StopPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
