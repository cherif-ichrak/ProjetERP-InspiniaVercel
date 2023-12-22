import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherAchatsComponent } from './afficher-achats.component';

describe('AfficherAchatsComponent', () => {
  let component: AfficherAchatsComponent;
  let fixture: ComponentFixture<AfficherAchatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfficherAchatsComponent]
    });
    fixture = TestBed.createComponent(AfficherAchatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
