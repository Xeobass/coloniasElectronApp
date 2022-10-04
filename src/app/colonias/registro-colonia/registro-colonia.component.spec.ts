import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroColoniaComponent } from './registro-colonia.component';

describe('RegistroColoniaComponent', () => {
  let component: RegistroColoniaComponent;
  let fixture: ComponentFixture<RegistroColoniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroColoniaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroColoniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
