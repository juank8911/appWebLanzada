import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVerPublicacionComponent } from './modal-ver-publicacion.component';

describe('ModalVerPublicacionComponent', () => {
  let component: ModalVerPublicacionComponent;
  let fixture: ComponentFixture<ModalVerPublicacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalVerPublicacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVerPublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
