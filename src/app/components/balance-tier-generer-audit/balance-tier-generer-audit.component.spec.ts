import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceTierGenererAuditComponent } from './balance-tier-generer-audit.component';

describe('BalanceTierGenererAuditComponent', () => {
  let component: BalanceTierGenererAuditComponent;
  let fixture: ComponentFixture<BalanceTierGenererAuditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BalanceTierGenererAuditComponent]
    });
    fixture = TestBed.createComponent(BalanceTierGenererAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
