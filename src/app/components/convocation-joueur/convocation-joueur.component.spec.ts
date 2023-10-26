import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvocationJoueurComponent } from './convocation-joueur.component';

describe('ConvocationJoueurComponent', () => {
  let component: ConvocationJoueurComponent;
  let fixture: ComponentFixture<ConvocationJoueurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConvocationJoueurComponent]
    });
    fixture = TestBed.createComponent(ConvocationJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
