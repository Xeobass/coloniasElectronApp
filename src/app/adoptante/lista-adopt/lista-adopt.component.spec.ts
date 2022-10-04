import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAdoptComponent } from './lista-adopt.component';

describe('ListaAdoptComponent', () => {
  let component: ListaAdoptComponent;
  let fixture: ComponentFixture<ListaAdoptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAdoptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAdoptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
