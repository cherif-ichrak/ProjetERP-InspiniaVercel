import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherEventComponent } from './afficher-event.component';

describe('AfficherEventComponent', () => {
  let component: AfficherEventComponent;
  let fixture: ComponentFixture<AfficherEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfficherEventComponent]
    });
    fixture = TestBed.createComponent(AfficherEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
