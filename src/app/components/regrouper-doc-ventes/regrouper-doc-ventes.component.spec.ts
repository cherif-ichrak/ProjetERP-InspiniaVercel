import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegrouperDocVentesComponent } from './regrouper-doc-ventes.component';

describe('RegrouperDocVentesComponent', () => {
  let component: RegrouperDocVentesComponent;
  let fixture: ComponentFixture<RegrouperDocVentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegrouperDocVentesComponent]
    });
    fixture = TestBed.createComponent(RegrouperDocVentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
