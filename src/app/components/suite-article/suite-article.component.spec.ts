import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiteArticleComponent } from './suite-article.component';

describe('SuiteArticleComponent', () => {
  let component: SuiteArticleComponent;
  let fixture: ComponentFixture<SuiteArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuiteArticleComponent]
    });
    fixture = TestBed.createComponent(SuiteArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
