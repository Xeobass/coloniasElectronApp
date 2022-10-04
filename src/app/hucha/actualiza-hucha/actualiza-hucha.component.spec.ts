import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizaHuchaComponent } from './actualiza-hucha.component';

describe('ActualizaHuchaComponent', () => {
  let component: ActualizaHuchaComponent;
  let fixture: ComponentFixture<ActualizaHuchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizaHuchaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizaHuchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
