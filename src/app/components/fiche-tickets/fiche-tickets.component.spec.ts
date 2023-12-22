import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheTicketsComponent } from './fiche-tickets.component';

describe('FicheTicketsComponent', () => {
  let component: FicheTicketsComponent;
  let fixture: ComponentFixture<FicheTicketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FicheTicketsComponent]
    });
    fixture = TestBed.createComponent(FicheTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
