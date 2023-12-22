import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsClientComponent } from './contacts-client.component';

describe('ContactsClientComponent', () => {
  let component: ContactsClientComponent;
  let fixture: ComponentFixture<ContactsClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactsClientComponent]
    });
    fixture = TestBed.createComponent(ContactsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
