import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceTiersComponent } from './balance-tiers.component';

describe('BalanceTiersComponent', () => {
  let component: BalanceTiersComponent;
  let fixture: ComponentFixture<BalanceTiersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BalanceTiersComponent]
    });
    fixture = TestBed.createComponent(BalanceTiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
