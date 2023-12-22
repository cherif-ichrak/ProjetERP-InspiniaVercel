import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerConventionComponent } from './creer-convention.component';

describe('CreerConventionComponent', () => {
  let component: CreerConventionComponent;
  let fixture: ComponentFixture<CreerConventionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreerConventionComponent]
    });
    fixture = TestBed.createComponent(CreerConventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
