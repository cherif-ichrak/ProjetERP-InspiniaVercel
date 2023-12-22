import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierConstitutionComponent } from './modifier-constitution.component';

describe('ModifierConstitutionComponent', () => {
  let component: ModifierConstitutionComponent;
  let fixture: ComponentFixture<ModifierConstitutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierConstitutionComponent]
    });
    fixture = TestBed.createComponent(ModifierConstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
