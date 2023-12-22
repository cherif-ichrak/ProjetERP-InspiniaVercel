import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSectionAuditComponent } from './info-section-audit.component';

describe('InfoSectionAuditComponent', () => {
  let component: InfoSectionAuditComponent;
  let fixture: ComponentFixture<InfoSectionAuditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoSectionAuditComponent]
    });
    fixture = TestBed.createComponent(InfoSectionAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
