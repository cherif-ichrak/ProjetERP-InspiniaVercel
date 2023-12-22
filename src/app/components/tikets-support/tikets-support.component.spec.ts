import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiketsSupportComponent } from './tikets-support.component';

describe('TiketsSupportComponent', () => {
  let component: TiketsSupportComponent;
  let fixture: ComponentFixture<TiketsSupportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TiketsSupportComponent]
    });
    fixture = TestBed.createComponent(TiketsSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
