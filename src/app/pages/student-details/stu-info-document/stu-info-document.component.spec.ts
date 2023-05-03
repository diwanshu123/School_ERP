import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuInfoDocumentComponent } from './stu-info-document.component';

describe('StuInfoDocumentComponent', () => {
  let component: StuInfoDocumentComponent;
  let fixture: ComponentFixture<StuInfoDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuInfoDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuInfoDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
