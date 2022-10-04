import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaColoniaComponent } from './lista-colonia.component';

describe('ListaColoniaComponent', () => {
  let component: ListaColoniaComponent;
  let fixture: ComponentFixture<ListaColoniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaColoniaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaColoniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
