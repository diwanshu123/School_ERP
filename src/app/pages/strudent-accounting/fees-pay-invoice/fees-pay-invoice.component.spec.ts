import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesPayInvoiceComponent } from './fees-pay-invoice.component';

describe('FeesPayInvoiceComponent', () => {
  let component: FeesPayInvoiceComponent;
  let fixture: ComponentFixture<FeesPayInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeesPayInvoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeesPayInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
