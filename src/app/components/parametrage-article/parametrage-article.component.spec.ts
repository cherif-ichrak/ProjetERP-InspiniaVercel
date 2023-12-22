import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrageArticleComponent } from './parametrage-article.component';

describe('ParametrageArticleComponent', () => {
  let component: ParametrageArticleComponent;
  let fixture: ComponentFixture<ParametrageArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParametrageArticleComponent]
    });
    fixture = TestBed.createComponent(ParametrageArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
