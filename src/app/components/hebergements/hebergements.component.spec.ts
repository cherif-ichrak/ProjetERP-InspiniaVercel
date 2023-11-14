import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HebergementsComponent } from './hebergements.component';

describe('HebergementsComponent', () => {
  let component: HebergementsComponent;
  let fixture: ComponentFixture<HebergementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HebergementsComponent]
    });
    fixture = TestBed.createComponent(HebergementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
