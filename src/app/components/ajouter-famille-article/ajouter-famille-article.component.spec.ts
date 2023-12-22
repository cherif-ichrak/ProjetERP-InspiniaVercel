import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterFamilleArticleComponent } from './ajouter-famille-article.component';

describe('AjouterFamilleArticleComponent', () => {
  let component: AjouterFamilleArticleComponent;
  let fixture: ComponentFixture<AjouterFamilleArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterFamilleArticleComponent]
    });
    fixture = TestBed.createComponent(AjouterFamilleArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
