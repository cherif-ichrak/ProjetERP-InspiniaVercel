import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhGroupeComponent } from './rh-groupe.component';

describe('RhGroupeComponent', () => {
  let component: RhGroupeComponent;
  let fixture: ComponentFixture<RhGroupeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RhGroupeComponent]
    });
    fixture = TestBed.createComponent(RhGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
