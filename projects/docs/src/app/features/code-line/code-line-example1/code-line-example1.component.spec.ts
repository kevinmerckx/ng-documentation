import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeLineExample1Component } from './code-line-example1.component';

describe('CodeLineExample1Component', () => {
  let component: CodeLineExample1Component;
  let fixture: ComponentFixture<CodeLineExample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeLineExample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeLineExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
