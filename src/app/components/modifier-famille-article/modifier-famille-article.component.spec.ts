import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierFamilleArticleComponent } from './modifier-famille-article.component';

describe('ModifierFamilleArticleComponent', () => {
  let component: ModifierFamilleArticleComponent;
  let fixture: ComponentFixture<ModifierFamilleArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierFamilleArticleComponent]
    });
    fixture = TestBed.createComponent(ModifierFamilleArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
