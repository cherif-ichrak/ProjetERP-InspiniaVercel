import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubriqueAbonneComponent } from './rubrique-abonne.component';

describe('RubriqueAbonneComponent', () => {
  let component: RubriqueAbonneComponent;
  let fixture: ComponentFixture<RubriqueAbonneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RubriqueAbonneComponent]
    });
    fixture = TestBed.createComponent(RubriqueAbonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
