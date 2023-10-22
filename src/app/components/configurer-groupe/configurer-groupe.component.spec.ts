import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurerGroupeComponent } from './configurer-groupe.component';

describe('ConfigurerGroupeComponent', () => {
  let component: ConfigurerGroupeComponent;
  let fixture: ComponentFixture<ConfigurerGroupeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigurerGroupeComponent]
    });
    fixture = TestBed.createComponent(ConfigurerGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
