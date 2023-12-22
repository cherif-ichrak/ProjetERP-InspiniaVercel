import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BondeCommandeVenteComponent } from './bonde-commande-vente.component';

describe('BondeCommandeVenteComponent', () => {
  let component: BondeCommandeVenteComponent;
  let fixture: ComponentFixture<BondeCommandeVenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BondeCommandeVenteComponent]
    });
    fixture = TestBed.createComponent(BondeCommandeVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
