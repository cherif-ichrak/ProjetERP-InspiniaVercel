import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimerFicheInterventionComponent } from './imprimer-fiche-intervention.component';

describe('ImprimerFicheInterventionComponent', () => {
  let component: ImprimerFicheInterventionComponent;
  let fixture: ComponentFixture<ImprimerFicheInterventionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImprimerFicheInterventionComponent]
    });
    fixture = TestBed.createComponent(ImprimerFicheInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
