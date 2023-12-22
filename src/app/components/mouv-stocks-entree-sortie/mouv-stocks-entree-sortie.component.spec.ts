import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouvStocksEntreeSortieComponent } from './mouv-stocks-entree-sortie.component';

describe('MouvStocksEntreeSortieComponent', () => {
  let component: MouvStocksEntreeSortieComponent;
  let fixture: ComponentFixture<MouvStocksEntreeSortieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MouvStocksEntreeSortieComponent]
    });
    fixture = TestBed.createComponent(MouvStocksEntreeSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
