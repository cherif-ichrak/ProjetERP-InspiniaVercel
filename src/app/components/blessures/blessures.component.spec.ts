import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlessuresComponent } from './blessures.component';

describe('BlessuresComponent', () => {
  let component: BlessuresComponent;
  let fixture: ComponentFixture<BlessuresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlessuresComponent]
    });
    fixture = TestBed.createComponent(BlessuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
