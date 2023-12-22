import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImporterComptabiliteComponent } from './importer-comptabilite.component';

describe('ImporterComptabiliteComponent', () => {
  let component: ImporterComptabiliteComponent;
  let fixture: ComponentFixture<ImporterComptabiliteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImporterComptabiliteComponent]
    });
    fixture = TestBed.createComponent(ImporterComptabiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
