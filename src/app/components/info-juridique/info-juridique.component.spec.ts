import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoJuridiqueComponent } from './info-juridique.component';

describe('InfoJuridiqueComponent', () => {
  let component: InfoJuridiqueComponent;
  let fixture: ComponentFixture<InfoJuridiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoJuridiqueComponent]
    });
    fixture = TestBed.createComponent(InfoJuridiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
