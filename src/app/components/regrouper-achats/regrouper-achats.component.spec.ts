import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegrouperAchatsComponent } from './regrouper-achats.component';

describe('RegrouperAchatsComponent', () => {
  let component: RegrouperAchatsComponent;
  let fixture: ComponentFixture<RegrouperAchatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegrouperAchatsComponent]
    });
    fixture = TestBed.createComponent(RegrouperAchatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
