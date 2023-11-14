import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimerCaissComponent } from './imprimer-caiss.component';

describe('ImprimerCaissComponent', () => {
  let component: ImprimerCaissComponent;
  let fixture: ComponentFixture<ImprimerCaissComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImprimerCaissComponent]
    });
    fixture = TestBed.createComponent(ImprimerCaissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
