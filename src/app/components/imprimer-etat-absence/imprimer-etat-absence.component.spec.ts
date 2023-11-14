import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimerEtatAbsenceComponent } from './imprimer-etat-absence.component';

describe('ImprimerEtatAbsenceComponent', () => {
  let component: ImprimerEtatAbsenceComponent;
  let fixture: ComponentFixture<ImprimerEtatAbsenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImprimerEtatAbsenceComponent]
    });
    fixture = TestBed.createComponent(ImprimerEtatAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
