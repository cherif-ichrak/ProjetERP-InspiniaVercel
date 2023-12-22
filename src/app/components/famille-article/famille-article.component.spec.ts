import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilleArticleComponent } from './famille-article.component';

describe('FamilleArticleComponent', () => {
  let component: FamilleArticleComponent;
  let fixture: ComponentFixture<FamilleArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FamilleArticleComponent]
    });
    fixture = TestBed.createComponent(FamilleArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
