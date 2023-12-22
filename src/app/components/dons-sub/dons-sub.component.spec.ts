import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonsSubComponent } from './dons-sub.component';

describe('DonsSubComponent', () => {
  let component: DonsSubComponent;
  let fixture: ComponentFixture<DonsSubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonsSubComponent]
    });
    fixture = TestBed.createComponent(DonsSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
