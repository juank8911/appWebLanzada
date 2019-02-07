import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCitasCalendarioComponent } from './ver-citas-calendario.component';

describe('VerCitasCalendarioComponent', () => {
  let component: VerCitasCalendarioComponent;
  let fixture: ComponentFixture<VerCitasCalendarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerCitasCalendarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerCitasCalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
