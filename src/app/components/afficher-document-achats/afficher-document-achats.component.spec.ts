import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherDocumentAchatsComponent } from './afficher-document-achats.component';

describe('AfficherDocumentAchatsComponent', () => {
  let component: AfficherDocumentAchatsComponent;
  let fixture: ComponentFixture<AfficherDocumentAchatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfficherDocumentAchatsComponent]
    });
    fixture = TestBed.createComponent(AfficherDocumentAchatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
