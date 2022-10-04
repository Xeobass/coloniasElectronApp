import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVetesComponent } from './lista-vetes.component';

describe('ListaVetesComponent', () => {
  let component: ListaVetesComponent;
  let fixture: ComponentFixture<ListaVetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaVetesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaVetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
