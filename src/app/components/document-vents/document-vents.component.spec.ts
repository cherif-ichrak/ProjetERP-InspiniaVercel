import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentVentsComponent } from './document-vents.component';

describe('DocumentVentsComponent', () => {
  let component: DocumentVentsComponent;
  let fixture: ComponentFixture<DocumentVentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentVentsComponent]
    });
    fixture = TestBed.createComponent(DocumentVentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
