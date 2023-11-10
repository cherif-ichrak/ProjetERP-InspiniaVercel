import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsStaffComponent } from './details-staff.component';

describe('DetailsStaffComponent', () => {
  let component: DetailsStaffComponent;
  let fixture: ComponentFixture<DetailsStaffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsStaffComponent]
    });
    fixture = TestBed.createComponent(DetailsStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
