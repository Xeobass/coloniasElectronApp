import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizaVetesComponent } from './actualiza-vetes.component';

describe('ActualizaVetesComponent', () => {
  let component: ActualizaVetesComponent;
  let fixture: ComponentFixture<ActualizaVetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizaVetesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizaVetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
