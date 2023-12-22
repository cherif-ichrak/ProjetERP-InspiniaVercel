import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertesClientsComponent } from './alertes-clients.component';

describe('AlertesClientsComponent', () => {
  let component: AlertesClientsComponent;
  let fixture: ComponentFixture<AlertesClientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertesClientsComponent]
    });
    fixture = TestBed.createComponent(AlertesClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
