import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationSocComponent } from './consultation-soc.component';

describe('ConsultationSocComponent', () => {
  let component: ConsultationSocComponent;
  let fixture: ComponentFixture<ConsultationSocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultationSocComponent]
    });
    fixture = TestBed.createComponent(ConsultationSocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
