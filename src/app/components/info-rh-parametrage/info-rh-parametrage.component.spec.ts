import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRhParametrageComponent } from './info-rh-parametrage.component';

describe('InfoRhParametrageComponent', () => {
  let component: InfoRhParametrageComponent;
  let fixture: ComponentFixture<InfoRhParametrageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoRhParametrageComponent]
    });
    fixture = TestBed.createComponent(InfoRhParametrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
