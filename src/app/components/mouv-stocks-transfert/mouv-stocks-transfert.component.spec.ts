import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouvStocksTransfertComponent } from './mouv-stocks-transfert.component';

describe('MouvStocksTransfertComponent', () => {
  let component: MouvStocksTransfertComponent;
  let fixture: ComponentFixture<MouvStocksTransfertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MouvStocksTransfertComponent]
    });
    fixture = TestBed.createComponent(MouvStocksTransfertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
