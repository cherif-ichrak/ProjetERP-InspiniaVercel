import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetCreanceComponent } from './det-creance.component';

describe('DetCreanceComponent', () => {
  let component: DetCreanceComponent;
  let fixture: ComponentFixture<DetCreanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetCreanceComponent]
    });
    fixture = TestBed.createComponent(DetCreanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
