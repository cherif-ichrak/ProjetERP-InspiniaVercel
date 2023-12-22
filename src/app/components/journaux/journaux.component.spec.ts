import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournauxComponent } from './journaux.component';

describe('JournauxComponent', () => {
  let component: JournauxComponent;
  let fixture: ComponentFixture<JournauxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JournauxComponent]
    });
    fixture = TestBed.createComponent(JournauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
