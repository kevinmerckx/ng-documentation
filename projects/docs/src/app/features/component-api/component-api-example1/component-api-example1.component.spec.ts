import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentApiExample1Component } from './component-api-example1.component';

describe('ComponentApiExample1Component', () => {
  let component: ComponentApiExample1Component;
  let fixture: ComponentFixture<ComponentApiExample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentApiExample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentApiExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
