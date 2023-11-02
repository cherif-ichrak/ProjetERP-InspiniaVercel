import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimerContratsComponent } from './imprimer-contrats.component';

describe('ImprimerContratsComponent', () => {
  let component: ImprimerContratsComponent;
  let fixture: ComponentFixture<ImprimerContratsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImprimerContratsComponent]
    });
    fixture = TestBed.createComponent(ImprimerContratsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
