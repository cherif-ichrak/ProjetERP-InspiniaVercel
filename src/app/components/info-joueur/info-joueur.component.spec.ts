import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoJoueurComponent } from './info-joueur.component';

describe('InfoJoueurComponent', () => {
  let component: InfoJoueurComponent;
  let fixture: ComponentFixture<InfoJoueurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoJoueurComponent]
    });
    fixture = TestBed.createComponent(InfoJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
