import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimerContactsComponent } from './imprimer-contacts.component';

describe('ImprimerContactsComponent', () => {
  let component: ImprimerContactsComponent;
  let fixture: ComponentFixture<ImprimerContactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImprimerContactsComponent]
    });
    fixture = TestBed.createComponent(ImprimerContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
