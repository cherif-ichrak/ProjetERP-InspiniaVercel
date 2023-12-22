import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementHorsComponent } from './engagement-hors.component';

describe('EngagementHorsComponent', () => {
  let component: EngagementHorsComponent;
  let fixture: ComponentFixture<EngagementHorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EngagementHorsComponent]
    });
    fixture = TestBed.createComponent(EngagementHorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
