import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsImprimesClientComponent } from './models-imprimes-client.component';

describe('ModelsImprimesClientComponent', () => {
  let component: ModelsImprimesClientComponent;
  let fixture: ComponentFixture<ModelsImprimesClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelsImprimesClientComponent]
    });
    fixture = TestBed.createComponent(ModelsImprimesClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
