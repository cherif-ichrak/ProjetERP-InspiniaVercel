import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplementArticleComponent } from './complement-article.component';

describe('ComplementArticleComponent', () => {
  let component: ComplementArticleComponent;
  let fixture: ComponentFixture<ComplementArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComplementArticleComponent]
    });
    fixture = TestBed.createComponent(ComplementArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
