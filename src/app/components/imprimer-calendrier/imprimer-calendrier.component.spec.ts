import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimerCalendrierComponent } from './imprimer-calendrier.component';

describe('ImprimerCalendrierComponent', () => {
  let component: ImprimerCalendrierComponent;
  let fixture: ComponentFixture<ImprimerCalendrierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImprimerCalendrierComponent]
    });
    fixture = TestBed.createComponent(ImprimerCalendrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
