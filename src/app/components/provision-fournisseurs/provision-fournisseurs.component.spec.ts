import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisionFournisseursComponent } from './provision-fournisseurs.component';

describe('ProvisionFournisseursComponent', () => {
  let component: ProvisionFournisseursComponent;
  let fixture: ComponentFixture<ProvisionFournisseursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProvisionFournisseursComponent]
    });
    fixture = TestBed.createComponent(ProvisionFournisseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
