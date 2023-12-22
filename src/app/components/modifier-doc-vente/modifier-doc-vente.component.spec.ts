import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierDocVenteComponent } from './modifier-doc-vente.component';

describe('ModifierDocVenteComponent', () => {
  let component: ModifierDocVenteComponent;
  let fixture: ComponentFixture<ModifierDocVenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierDocVenteComponent]
    });
    fixture = TestBed.createComponent(ModifierDocVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
