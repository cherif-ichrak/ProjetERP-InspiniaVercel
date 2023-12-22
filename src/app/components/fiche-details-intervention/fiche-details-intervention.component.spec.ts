import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheDetailsInterventionComponent } from './fiche-details-intervention.component';

describe('FicheDetailsInterventionComponent', () => {
  let component: FicheDetailsInterventionComponent;
  let fixture: ComponentFixture<FicheDetailsInterventionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FicheDetailsInterventionComponent]
    });
    fixture = TestBed.createComponent(FicheDetailsInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
