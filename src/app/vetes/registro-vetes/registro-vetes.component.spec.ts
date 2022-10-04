import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroVetesComponent } from './registro-vetes.component';

describe('RegistroVetesComponent', () => {
  let component: RegistroVetesComponent;
  let fixture: ComponentFixture<RegistroVetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroVetesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroVetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
