import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuilleMatchComponent } from './fuille-match.component';

describe('FuilleMatchComponent', () => {
  let component: FuilleMatchComponent;
  let fixture: ComponentFixture<FuilleMatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuilleMatchComponent]
    });
    fixture = TestBed.createComponent(FuilleMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
