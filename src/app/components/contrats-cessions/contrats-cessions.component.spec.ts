import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratsCessionsComponent } from './contrats-cessions.component';

describe('ContratsCessionsComponent', () => {
  let component: ContratsCessionsComponent;
  let fixture: ComponentFixture<ContratsCessionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContratsCessionsComponent]
    });
    fixture = TestBed.createComponent(ContratsCessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
