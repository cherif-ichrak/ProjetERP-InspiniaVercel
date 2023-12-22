import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CessionComponent } from './cession.component';

describe('CessionComponent', () => {
  let component: CessionComponent;
  let fixture: ComponentFixture<CessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CessionComponent]
    });
    fixture = TestBed.createComponent(CessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
