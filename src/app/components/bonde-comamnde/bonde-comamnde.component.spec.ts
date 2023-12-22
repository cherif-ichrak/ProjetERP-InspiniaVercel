import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BondeComamndeComponent } from './bonde-comamnde.component';

describe('BondeComamndeComponent', () => {
  let component: BondeComamndeComponent;
  let fixture: ComponentFixture<BondeComamndeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BondeComamndeComponent]
    });
    fixture = TestBed.createComponent(BondeComamndeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
