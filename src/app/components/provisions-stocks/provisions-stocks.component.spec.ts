import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisionsStocksComponent } from './provisions-stocks.component';

describe('ProvisionsStocksComponent', () => {
  let component: ProvisionsStocksComponent;
  let fixture: ComponentFixture<ProvisionsStocksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProvisionsStocksComponent]
    });
    fixture = TestBed.createComponent(ProvisionsStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
