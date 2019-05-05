import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeExample2Component } from './code-example2.component';

describe('CodeExample2Component', () => {
  let component: CodeExample2Component;
  let fixture: ComponentFixture<CodeExample2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeExample2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeExample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
