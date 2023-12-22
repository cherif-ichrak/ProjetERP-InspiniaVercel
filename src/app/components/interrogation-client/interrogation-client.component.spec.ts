import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterrogationClientComponent } from './interrogation-client.component';

describe('InterrogationClientComponent', () => {
  let component: InterrogationClientComponent;
  let fixture: ComponentFixture<InterrogationClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterrogationClientComponent]
    });
    fixture = TestBed.createComponent(InterrogationClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
