import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAbonneComponent } from './info-abonne.component';

describe('InfoAbonneComponent', () => {
  let component: InfoAbonneComponent;
  let fixture: ComponentFixture<InfoAbonneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoAbonneComponent]
    });
    fixture = TestBed.createComponent(InfoAbonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
