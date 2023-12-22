import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdetificationAbonneComponent } from './idetification-abonne.component';

describe('IdetificationAbonneComponent', () => {
  let component: IdetificationAbonneComponent;
  let fixture: ComponentFixture<IdetificationAbonneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdetificationAbonneComponent]
    });
    fixture = TestBed.createComponent(IdetificationAbonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
