import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsExample1Component } from './tabs-example1.component';

describe('TabsExample1Component', () => {
  let component: TabsExample1Component;
  let fixture: ComponentFixture<TabsExample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsExample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
