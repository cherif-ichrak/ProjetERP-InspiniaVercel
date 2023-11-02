import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimerRommingComponent } from './imprimer-romming.component';

describe('ImprimerRommingComponent', () => {
  let component: ImprimerRommingComponent;
  let fixture: ComponentFixture<ImprimerRommingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImprimerRommingComponent]
    });
    fixture = TestBed.createComponent(ImprimerRommingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
