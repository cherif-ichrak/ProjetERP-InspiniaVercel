import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisionsTitresComponent } from './provisions-titres.component';

describe('ProvisionsTitresComponent', () => {
  let component: ProvisionsTitresComponent;
  let fixture: ComponentFixture<ProvisionsTitresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProvisionsTitresComponent]
    });
    fixture = TestBed.createComponent(ProvisionsTitresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
