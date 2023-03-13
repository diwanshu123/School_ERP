import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanRessourceComponent } from './human-ressource.component';

describe('HumanRessourceComponent', () => {
  let component: HumanRessourceComponent;
  let fixture: ComponentFixture<HumanRessourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanRessourceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumanRessourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
