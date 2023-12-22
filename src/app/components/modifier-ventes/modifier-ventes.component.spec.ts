import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierVentesComponent } from './modifier-ventes.component';

describe('ModifierVentesComponent', () => {
  let component: ModifierVentesComponent;
  let fixture: ComponentFixture<ModifierVentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierVentesComponent]
    });
    fixture = TestBed.createComponent(ModifierVentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
