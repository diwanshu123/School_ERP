import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesAllocationComponent } from './fees-allocation.component';

describe('FeesAllocationComponent', () => {
  let component: FeesAllocationComponent;
  let fixture: ComponentFixture<FeesAllocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeesAllocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeesAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
