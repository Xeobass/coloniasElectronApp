import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphlayoutComponent } from './graphlayout.component';

describe('GraphlayoutComponent', () => {
  let component: GraphlayoutComponent;
  let fixture: ComponentFixture<GraphlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphlayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
