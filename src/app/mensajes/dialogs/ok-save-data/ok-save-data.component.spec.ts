import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OkSaveDataComponent } from './ok-save-data.component';

describe('OkSaveDataComponent', () => {
  let component: OkSaveDataComponent;
  let fixture: ComponentFixture<OkSaveDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OkSaveDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OkSaveDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
