import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentAchatComponent } from './document-achat.component';

describe('DocumentAchatComponent', () => {
  let component: DocumentAchatComponent;
  let fixture: ComponentFixture<DocumentAchatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentAchatComponent]
    });
    fixture = TestBed.createComponent(DocumentAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
