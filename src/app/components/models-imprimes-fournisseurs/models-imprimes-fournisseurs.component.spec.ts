import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsImprimesFournisseursComponent } from './models-imprimes-fournisseurs.component';

describe('ModelsImprimesFournisseursComponent', () => {
  let component: ModelsImprimesFournisseursComponent;
  let fixture: ComponentFixture<ModelsImprimesFournisseursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelsImprimesFournisseursComponent]
    });
    fixture = TestBed.createComponent(ModelsImprimesFournisseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
