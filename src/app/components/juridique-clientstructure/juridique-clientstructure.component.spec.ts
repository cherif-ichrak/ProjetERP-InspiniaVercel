import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuridiqueClientstructureComponent } from './juridique-clientstructure.component';

describe('JuridiqueClientstructureComponent', () => {
  let component: JuridiqueClientstructureComponent;
  let fixture: ComponentFixture<JuridiqueClientstructureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JuridiqueClientstructureComponent]
    });
    fixture = TestBed.createComponent(JuridiqueClientstructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
