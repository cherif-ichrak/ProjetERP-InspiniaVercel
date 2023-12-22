import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierDocumentAchatsComponent } from './modifier-document-achats.component';

describe('ModifierDocumentAchatsComponent', () => {
  let component: ModifierDocumentAchatsComponent;
  let fixture: ComponentFixture<ModifierDocumentAchatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierDocumentAchatsComponent]
    });
    fixture = TestBed.createComponent(ModifierDocumentAchatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
