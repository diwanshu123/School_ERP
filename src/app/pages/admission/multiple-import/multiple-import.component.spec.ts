import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleImportComponent } from './multiple-import.component';

describe('MultipleImportComponent', () => {
  let component: MultipleImportComponent;
  let fixture: ComponentFixture<MultipleImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleImportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
