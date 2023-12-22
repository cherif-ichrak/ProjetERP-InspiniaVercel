import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoArticleStructureComponent } from './info-article-structure.component';

describe('InfoArticleStructureComponent', () => {
  let component: InfoArticleStructureComponent;
  let fixture: ComponentFixture<InfoArticleStructureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoArticleStructureComponent]
    });
    fixture = TestBed.createComponent(InfoArticleStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
