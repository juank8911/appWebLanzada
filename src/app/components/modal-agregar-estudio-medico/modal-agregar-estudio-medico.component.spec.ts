import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAgregarEstudioMedicoComponent } from './modal-agregar-estudio-medico.component';

describe('ModalAgregarEstudioMedicoComponent', () => {
  let component: ModalAgregarEstudioMedicoComponent;
  let fixture: ComponentFixture<ModalAgregarEstudioMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAgregarEstudioMedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAgregarEstudioMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
