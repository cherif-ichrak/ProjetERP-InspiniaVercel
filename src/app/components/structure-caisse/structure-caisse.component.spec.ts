import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureCaisseComponent } from './structure-caisse.component';

describe('StructureCaisseComponent', () => {
  let component: StructureCaisseComponent;
  let fixture: ComponentFixture<StructureCaisseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StructureCaisseComponent]
    });
    fixture = TestBed.createComponent(StructureCaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
