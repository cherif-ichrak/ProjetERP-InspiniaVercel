import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoJuridiquePvComponent } from './info-juridique-pv.component';

describe('InfoJuridiquePvComponent', () => {
  let component: InfoJuridiquePvComponent;
  let fixture: ComponentFixture<InfoJuridiquePvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoJuridiquePvComponent]
    });
    fixture = TestBed.createComponent(InfoJuridiquePvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
