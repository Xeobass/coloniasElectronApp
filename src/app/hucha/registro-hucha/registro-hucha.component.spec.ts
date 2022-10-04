import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroHuchaComponent } from './registro-hucha.component';

describe('RegistroHuchaComponent', () => {
  let component: RegistroHuchaComponent;
  let fixture: ComponentFixture<RegistroHuchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroHuchaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroHuchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
