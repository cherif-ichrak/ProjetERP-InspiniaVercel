import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratCessionComponent } from './contrat-cession.component';

describe('ContratCessionComponent', () => {
  let component: ContratCessionComponent;
  let fixture: ComponentFixture<ContratCessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContratCessionComponent]
    });
    fixture = TestBed.createComponent(ContratCessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
