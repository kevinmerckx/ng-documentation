import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDocumentationExample1Component } from './component-documentation-example1.component';

describe('ComponentDocumentationExample1Component', () => {
  let component: ComponentDocumentationExample1Component;
  let fixture: ComponentFixture<ComponentDocumentationExample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDocumentationExample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDocumentationExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
