import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeExample1Component } from './code-example1.component';

describe('CodeExample1Component', () => {
  let component: CodeExample1Component;
  let fixture: ComponentFixture<CodeExample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeExample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
