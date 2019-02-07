import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrearMedicoComponent } from './modal-crear-medico.component';

describe('ModalCrearMedicoComponent', () => {
  let component: ModalCrearMedicoComponent;
  let fixture: ComponentFixture<ModalCrearMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCrearMedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCrearMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
