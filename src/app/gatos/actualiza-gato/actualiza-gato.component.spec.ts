import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizaGatoComponent } from './actualiza-gato.component';

describe('ActualizaGatoComponent', () => {
  let component: ActualizaGatoComponent;
  let fixture: ComponentFixture<ActualizaGatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizaGatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizaGatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
