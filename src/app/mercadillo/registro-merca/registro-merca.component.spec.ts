import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroMercaComponent } from './registro-merca.component';

describe('RegistroMercaComponent', () => {
  let component: RegistroMercaComponent;
  let fixture: ComponentFixture<RegistroMercaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroMercaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroMercaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
