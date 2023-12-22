import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvTratiementComponent } from './pv-tratiement.component';

describe('PvTratiementComponent', () => {
  let component: PvTratiementComponent;
  let fixture: ComponentFixture<PvTratiementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PvTratiementComponent]
    });
    fixture = TestBed.createComponent(PvTratiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
