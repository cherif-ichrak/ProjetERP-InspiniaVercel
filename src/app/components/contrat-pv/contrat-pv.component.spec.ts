import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratPvComponent } from './contrat-pv.component';

describe('ContratPvComponent', () => {
  let component: ContratPvComponent;
  let fixture: ComponentFixture<ContratPvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContratPvComponent]
    });
    fixture = TestBed.createComponent(ContratPvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
