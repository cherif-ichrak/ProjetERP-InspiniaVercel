import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierConventionTraitComponent } from './modifier-convention-trait.component';

describe('ModifierConventionTraitComponent', () => {
  let component: ModifierConventionTraitComponent;
  let fixture: ComponentFixture<ModifierConventionTraitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierConventionTraitComponent]
    });
    fixture = TestBed.createComponent(ModifierConventionTraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
