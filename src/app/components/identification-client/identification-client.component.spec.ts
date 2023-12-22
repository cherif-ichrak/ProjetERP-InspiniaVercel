import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificationClientComponent } from './identification-client.component';

describe('IdentificationClientComponent', () => {
  let component: IdentificationClientComponent;
  let fixture: ComponentFixture<IdentificationClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdentificationClientComponent]
    });
    fixture = TestBed.createComponent(IdentificationClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
