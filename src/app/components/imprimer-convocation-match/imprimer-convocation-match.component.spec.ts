import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimerConvocationMatchComponent } from './imprimer-convocation-match.component';

describe('ImprimerConvocationMatchComponent', () => {
  let component: ImprimerConvocationMatchComponent;
  let fixture: ComponentFixture<ImprimerConvocationMatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImprimerConvocationMatchComponent]
    });
    fixture = TestBed.createComponent(ImprimerConvocationMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
