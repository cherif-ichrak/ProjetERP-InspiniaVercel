import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepreLegalJuridiqueComponent } from './repre-legal-juridique.component';

describe('RepreLegalJuridiqueComponent', () => {
  let component: RepreLegalJuridiqueComponent;
  let fixture: ComponentFixture<RepreLegalJuridiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepreLegalJuridiqueComponent]
    });
    fixture = TestBed.createComponent(RepreLegalJuridiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
