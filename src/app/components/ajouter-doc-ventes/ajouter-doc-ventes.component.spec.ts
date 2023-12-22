import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterDocVentesComponent } from './ajouter-doc-ventes.component';

describe('AjouterDocVentesComponent', () => {
  let component: AjouterDocVentesComponent;
  let fixture: ComponentFixture<AjouterDocVentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterDocVentesComponent]
    });
    fixture = TestBed.createComponent(AjouterDocVentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
