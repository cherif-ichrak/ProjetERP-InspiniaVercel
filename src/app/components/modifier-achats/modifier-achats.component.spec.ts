import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierAchatsComponent } from './modifier-achats.component';

describe('ModifierAchatsComponent', () => {
  let component: ModifierAchatsComponent;
  let fixture: ComponentFixture<ModifierAchatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierAchatsComponent]
    });
    fixture = TestBed.createComponent(ModifierAchatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
