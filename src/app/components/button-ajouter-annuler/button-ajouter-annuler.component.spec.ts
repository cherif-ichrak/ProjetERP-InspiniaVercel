import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAjouterAnnulerComponent } from './button-ajouter-annuler.component';

describe('ButtonAjouterAnnulerComponent', () => {
  let component: ButtonAjouterAnnulerComponent;
  let fixture: ComponentFixture<ButtonAjouterAnnulerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonAjouterAnnulerComponent]
    });
    fixture = TestBed.createComponent(ButtonAjouterAnnulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
