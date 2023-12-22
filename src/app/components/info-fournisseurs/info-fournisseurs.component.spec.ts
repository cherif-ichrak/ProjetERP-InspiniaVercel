import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoFournisseursComponent } from './info-fournisseurs.component';

describe('InfoFournisseursComponent', () => {
  let component: InfoFournisseursComponent;
  let fixture: ComponentFixture<InfoFournisseursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoFournisseursComponent]
    });
    fixture = TestBed.createComponent(InfoFournisseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
