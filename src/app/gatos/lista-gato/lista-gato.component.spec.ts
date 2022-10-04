import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGatoComponent } from './lista-gato.component';

describe('ListaGatoComponent', () => {
  let component: ListaGatoComponent;
  let fixture: ComponentFixture<ListaGatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaGatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaGatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
