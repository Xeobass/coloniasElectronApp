import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAdoptComponent } from './registro-adopt.component';

describe('RegistroAdoptComponent', () => {
  let component: RegistroAdoptComponent;
  let fixture: ComponentFixture<RegistroAdoptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroAdoptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroAdoptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
