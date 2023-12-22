import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsImpJuridiqueClientsComponent } from './models-imp-juridique-clients.component';

describe('ModelsImpJuridiqueClientsComponent', () => {
  let component: ModelsImpJuridiqueClientsComponent;
  let fixture: ComponentFixture<ModelsImpJuridiqueClientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelsImpJuridiqueClientsComponent]
    });
    fixture = TestBed.createComponent(ModelsImpJuridiqueClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
