import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FineSetupComponent } from './fine-setup.component';

describe('FineSetupComponent', () => {
  let component: FineSetupComponent;
  let fixture: ComponentFixture<FineSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FineSetupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FineSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
