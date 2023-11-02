import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatMatchComponent } from './etat-match.component';

describe('EtatMatchComponent', () => {
  let component: EtatMatchComponent;
  let fixture: ComponentFixture<EtatMatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtatMatchComponent]
    });
    fixture = TestBed.createComponent(EtatMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
