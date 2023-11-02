import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheMatchComponent } from './fiche-match.component';

describe('FicheMatchComponent', () => {
  let component: FicheMatchComponent;
  let fixture: ComponentFixture<FicheMatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FicheMatchComponent]
    });
    fixture = TestBed.createComponent(FicheMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
