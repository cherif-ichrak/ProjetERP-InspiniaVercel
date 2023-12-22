import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplementsClientsComponent } from './complements-clients.component';

describe('ComplementsClientsComponent', () => {
  let component: ComplementsClientsComponent;
  let fixture: ComponentFixture<ComplementsClientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComplementsClientsComponent]
    });
    fixture = TestBed.createComponent(ComplementsClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
