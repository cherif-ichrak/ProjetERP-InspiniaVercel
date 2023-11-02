import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailleSanctionComponent } from './detaille-sanction.component';

describe('DetailleSanctionComponent', () => {
  let component: DetailleSanctionComponent;
  let fixture: ComponentFixture<DetailleSanctionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailleSanctionComponent]
    });
    fixture = TestBed.createComponent(DetailleSanctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
