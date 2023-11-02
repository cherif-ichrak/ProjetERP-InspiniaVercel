import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimerListePassComponent } from './imprimer-liste-pass.component';

describe('ImprimerListePassComponent', () => {
  let component: ImprimerListePassComponent;
  let fixture: ComponentFixture<ImprimerListePassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImprimerListePassComponent]
    });
    fixture = TestBed.createComponent(ImprimerListePassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
