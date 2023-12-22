import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloturerTicketComponent } from './cloturer-ticket.component';

describe('CloturerTicketComponent', () => {
  let component: CloturerTicketComponent;
  let fixture: ComponentFixture<CloturerTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CloturerTicketComponent]
    });
    fixture = TestBed.createComponent(CloturerTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
