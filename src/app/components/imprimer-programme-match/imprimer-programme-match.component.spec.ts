import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimerProgrammeMatchComponent } from './imprimer-programme-match.component';

describe('ImprimerProgrammeMatchComponent', () => {
  let component: ImprimerProgrammeMatchComponent;
  let fixture: ComponentFixture<ImprimerProgrammeMatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImprimerProgrammeMatchComponent]
    });
    fixture = TestBed.createComponent(ImprimerProgrammeMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
