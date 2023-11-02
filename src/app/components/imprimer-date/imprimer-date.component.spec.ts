import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimerDateComponent } from './imprimer-date.component';

describe('ImprimerDateComponent', () => {
  let component: ImprimerDateComponent;
  let fixture: ComponentFixture<ImprimerDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImprimerDateComponent]
    });
    fixture = TestBed.createComponent(ImprimerDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
