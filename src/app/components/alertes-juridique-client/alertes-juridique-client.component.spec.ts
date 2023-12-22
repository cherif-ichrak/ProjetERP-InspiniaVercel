import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertesJuridiqueClientComponent } from './alertes-juridique-client.component';

describe('AlertesJuridiqueClientComponent', () => {
  let component: AlertesJuridiqueClientComponent;
  let fixture: ComponentFixture<AlertesJuridiqueClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertesJuridiqueClientComponent]
    });
    fixture = TestBed.createComponent(AlertesJuridiqueClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
