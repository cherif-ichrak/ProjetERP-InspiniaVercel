import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoConstitutionComponent } from './info-constitution.component';

describe('InfoConstitutionComponent', () => {
  let component: InfoConstitutionComponent;
  let fixture: ComponentFixture<InfoConstitutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoConstitutionComponent]
    });
    fixture = TestBed.createComponent(InfoConstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
