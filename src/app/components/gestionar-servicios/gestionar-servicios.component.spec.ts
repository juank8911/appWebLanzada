import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarServiciosComponent } from './gestionar-servicios.component';

describe('GestionarServiciosComponent', () => {
  let component: GestionarServiciosComponent;
  let fixture: ComponentFixture<GestionarServiciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionarServiciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
