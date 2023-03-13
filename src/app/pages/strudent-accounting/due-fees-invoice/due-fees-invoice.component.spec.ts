import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DueFeesInvoiceComponent } from './due-fees-invoice.component';

describe('DueFeesInvoiceComponent', () => {
  let component: DueFeesInvoiceComponent;
  let fixture: ComponentFixture<DueFeesInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DueFeesInvoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DueFeesInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
