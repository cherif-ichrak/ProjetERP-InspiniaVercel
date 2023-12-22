import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisionsClientsComponent } from './provisions-clients.component';

describe('ProvisionsClientsComponent', () => {
  let component: ProvisionsClientsComponent;
  let fixture: ComponentFixture<ProvisionsClientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProvisionsClientsComponent]
    });
    fixture = TestBed.createComponent(ProvisionsClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
