import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametragePwdComponent } from './parametrage-pwd.component';

describe('ParametragePwdComponent', () => {
  let component: ParametragePwdComponent;
  let fixture: ComponentFixture<ParametragePwdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParametragePwdComponent]
    });
    fixture = TestBed.createComponent(ParametragePwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
