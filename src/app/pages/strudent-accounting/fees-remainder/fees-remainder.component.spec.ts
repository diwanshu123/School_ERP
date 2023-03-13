import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesRemainderComponent } from './fees-remainder.component';

describe('FeesRemainderComponent', () => {
  let component: FeesRemainderComponent;
  let fixture: ComponentFixture<FeesRemainderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeesRemainderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeesRemainderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
