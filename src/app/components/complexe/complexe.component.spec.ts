import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexeComponent } from './complexe.component';

describe('ComplexeComponent', () => {
  let component: ComplexeComponent;
  let fixture: ComponentFixture<ComplexeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComplexeComponent]
    });
    fixture = TestBed.createComponent(ComplexeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
