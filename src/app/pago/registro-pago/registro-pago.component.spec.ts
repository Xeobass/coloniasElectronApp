import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPagoComponent } from './registro-pago.component';

describe('RegistroPagoComponent', () => {
  let component: RegistroPagoComponent;
  let fixture: ComponentFixture<RegistroPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroPagoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
