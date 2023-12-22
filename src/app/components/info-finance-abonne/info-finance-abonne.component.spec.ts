import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoFinanceAbonneComponent } from './info-finance-abonne.component';

describe('InfoFinanceAbonneComponent', () => {
  let component: InfoFinanceAbonneComponent;
  let fixture: ComponentFixture<InfoFinanceAbonneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoFinanceAbonneComponent]
    });
    fixture = TestBed.createComponent(InfoFinanceAbonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
