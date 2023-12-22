import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneraleClientComponent } from './generale-client.component';

describe('GeneraleClientComponent', () => {
  let component: GeneraleClientComponent;
  let fixture: ComponentFixture<GeneraleClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneraleClientComponent]
    });
    fixture = TestBed.createComponent(GeneraleClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
