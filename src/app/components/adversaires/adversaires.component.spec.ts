import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdversairesComponent } from './adversaires.component';

describe('AdversairesComponent', () => {
  let component: AdversairesComponent;
  let fixture: ComponentFixture<AdversairesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdversairesComponent]
    });
    fixture = TestBed.createComponent(AdversairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
