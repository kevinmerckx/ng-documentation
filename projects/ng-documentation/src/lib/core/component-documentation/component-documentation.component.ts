import { AfterViewChecked, Component, Directive, ElementRef, Input, TemplateRef } from '@angular/core';

/**
 * Component that displays a component's or a directive's information: an overview, examples and API.
 */
@Component({
  selector: 'docs-component-documentation',
  templateUrl: './component-documentation.component.html',
  styleUrls: ['./component-documentation.component.sass']
})
export class ComponentDocumentationComponent {
  /**
   * The component class name.
   */
  @Input() componentId: string;
  /**
   * The component type.
   */
  @Input() componentType: 'directives' | 'components';
  /**
   * A title that will be displayed.
   */
  @Input() componentTitle: string;
  /**
   * @ignore
   */
  @Input() disableRoutedNavigation = false;

  examples: ComponentExampleDirective[] = [];

  /**
   * @ignore
   */
  registerExample(example: ComponentExampleDirective) {
    this.examples.push(example);
  }

}

@Directive({
  selector: '[docsAnchorContainer]'
})
export class AnchorContainerDirective implements AfterViewChecked {
  @Input() docsAnchorContainer: string;
  private anchors: AnchorDirective[] = [];
  private currentAnchor: string;

  constructor(private elementRef: ElementRef) {}

  registerAnchor(anchor: AnchorDirective) {
    this.anchors.push(anchor);
  }

  ngAfterViewChecked() {
    if (this.currentAnchor === this.docsAnchorContainer) {
      return;
    }

    this.currentAnchor = this.docsAnchorContainer;
    const element = this.elementRef.nativeElement as HTMLElement;
    const anchor = this.anchors.find(a => a.docsAnchor === this.docsAnchorContainer);
    if (!anchor) {
      return;
    }
    const anchorElement = anchor.elementRef.nativeElement as HTMLElement;
    element.scrollTop = anchorElement.offsetTop - element.offsetTop - 15;
  }
}

@Directive({
  selector: '[docsAnchor]'
})
export class AnchorDirective {
  @Input() docsAnchor: string;

  constructor(
    private container: AnchorContainerDirective,
    public elementRef: ElementRef
  ) {
    this.container.registerAnchor(this);
  }
}

@Directive({
  selector: '[docsComponentExample]'
})
export class ComponentExampleDirective {
  @Input() docsComponentExample: string;

  constructor(
    private documentation: ComponentDocumentationComponent,
    public template: TemplateRef<any>
  ) {
    this.documentation.registerExample(this);
  }
}
