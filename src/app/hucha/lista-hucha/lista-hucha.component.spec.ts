import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaHuchaComponent } from './lista-hucha.component';

describe('ListaHuchaComponent', () => {
  let component: ListaHuchaComponent;
  let fixture: ComponentFixture<ListaHuchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaHuchaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaHuchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
