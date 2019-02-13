import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVerCitaComponent } from './modal-ver-cita.component';

describe('ModalVerCitaComponent', () => {
  let component: ModalVerCitaComponent;
  let fixture: ComponentFixture<ModalVerCitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalVerCitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVerCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
