import { AfterViewChecked, Component, Directive, ElementRef, Input, TemplateRef, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Component that displays a component's or a directive's information: an overview, examples and API.
 */
@Component({
  selector: 'docs-component-documentation',
  templateUrl: './component-documentation.component.html',
  styleUrls: ['./component-documentation.component.sass']
})
export class ComponentDocumentationComponent implements OnChanges {
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

  tab$: Observable<'overview' | 'examples' | 'api'>;
  isOverview$: Observable<boolean>;
  isExamples$: Observable<boolean>;
  isApi$: Observable<boolean>;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  /**
   * @ignore
   */
  ngOnChanges() {
    this.tab$ = this.disableRoutedNavigation ? of('overview') : this.route.queryParams.pipe(map(p => p.tab || 'overview'));
    this.updateIsObservables();
  }

  /**
   * @ignore
   */
  registerExample(example: ComponentExampleDirective) {
    this.examples.push(example);
  }

  /**
   * @ignore
   */
  select(tab: 'overview' | 'examples' | 'api') {
    if (this.disableRoutedNavigation) {
      this.tab$ = of(tab);
      this.updateIsObservables();
    } else {
      this.router.navigate(['.'], {
        queryParamsHandling: 'merge',
        queryParams: {
          tab
        },
        relativeTo: this.route,
      });
    }
  }

  /**
   * @ignore
   */
  private updateIsObservables() {
    this.isOverview$ = this.tab$.pipe(map(v => v === 'overview'));
    this.isExamples$ = this.tab$.pipe(map(v => v === 'examples'));
    this.isApi$ = this.tab$.pipe(map(v => v === 'api'));
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
    const anchor = (this.anchors.find(a => a.docsAnchor === this.docsAnchorContainer).elementRef.nativeElement) as HTMLElement;

    element.scrollTop = anchor.offsetTop - element.offsetTop - 15;
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
