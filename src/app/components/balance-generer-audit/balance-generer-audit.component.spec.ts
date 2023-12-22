import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceGenererAuditComponent } from './balance-generer-audit.component';

describe('BalanceGenererAuditComponent', () => {
  let component: BalanceGenererAuditComponent;
  let fixture: ComponentFixture<BalanceGenererAuditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BalanceGenererAuditComponent]
    });
    fixture = TestBed.createComponent(BalanceGenererAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
