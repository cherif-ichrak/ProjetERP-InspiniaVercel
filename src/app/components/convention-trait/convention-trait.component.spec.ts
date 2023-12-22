import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConventionTraitComponent } from './convention-trait.component';

describe('ConventionTraitComponent', () => {
  let component: ConventionTraitComponent;
  let fixture: ComponentFixture<ConventionTraitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConventionTraitComponent]
    });
    fixture = TestBed.createComponent(ConventionTraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
