import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaileJoueurComponent } from './detaile-joueur.component';

describe('DetaileJoueurComponent', () => {
  let component: DetaileJoueurComponent;
  let fixture: ComponentFixture<DetaileJoueurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetaileJoueurComponent]
    });
    fixture = TestBed.createComponent(DetaileJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
