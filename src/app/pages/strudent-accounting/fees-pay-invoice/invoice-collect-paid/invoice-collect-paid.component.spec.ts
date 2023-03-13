import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceCollectPaidComponent } from './invoice-collect-paid.component';

describe('InvoiceCollectPaidComponent', () => {
  let component: InvoiceCollectPaidComponent;
  let fixture: ComponentFixture<InvoiceCollectPaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceCollectPaidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceCollectPaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
