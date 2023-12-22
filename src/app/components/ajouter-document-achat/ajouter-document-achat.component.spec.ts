import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterDocumentAchatComponent } from './ajouter-document-achat.component';

describe('AjouterDocumentAchatComponent', () => {
  let component: AjouterDocumentAchatComponent;
  let fixture: ComponentFixture<AjouterDocumentAchatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterDocumentAchatComponent]
    });
    fixture = TestBed.createComponent(AjouterDocumentAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
