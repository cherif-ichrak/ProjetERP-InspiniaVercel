import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllNotiffComponent } from './all-notiff.component';

describe('AllNotiffComponent', () => {
  let component: AllNotiffComponent;
  let fixture: ComponentFixture<AllNotiffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllNotiffComponent]
    });
    fixture = TestBed.createComponent(AllNotiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
