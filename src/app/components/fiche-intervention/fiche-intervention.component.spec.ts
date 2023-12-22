import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheInterventionComponent } from './fiche-intervention.component';

describe('FicheInterventionComponent', () => {
  let component: FicheInterventionComponent;
  let fixture: ComponentFixture<FicheInterventionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FicheInterventionComponent]
    });
    fixture = TestBed.createComponent(FicheInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
