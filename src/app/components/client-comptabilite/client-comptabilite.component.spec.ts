import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientComptabiliteComponent } from './client-comptabilite.component';

describe('ClientComptabiliteComponent', () => {
  let component: ClientComptabiliteComponent;
  let fixture: ComponentFixture<ClientComptabiliteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientComptabiliteComponent]
    });
    fixture = TestBed.createComponent(ClientComptabiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
