import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizaAdoptComponent } from './actualiza-adopt.component';

describe('ActualizaAdoptComponent', () => {
  let component: ActualizaAdoptComponent;
  let fixture: ComponentFixture<ActualizaAdoptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizaAdoptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizaAdoptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
