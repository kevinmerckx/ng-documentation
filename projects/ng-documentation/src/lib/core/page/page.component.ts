import { Component, Directive, Input, OnChanges, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

interface Section {
  title: string;
  template: TemplateRef<any>;
}

/**
 * This component displays a standard page layout: a top bar with a title and links to sections.
 */
@Component({
  selector: 'docs-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.sass']
})
export class PageComponent implements OnChanges {
  /**
   * Title for the page.
   */
  @Input() title: string;

  /**
   * Remove the navigation bar.
   */
  @Input() noNavigation = false;

  /**
   * @ignore
   */
  @Input() disableRoutedNavigation = false;

  activeSection$: Observable<Section>;
  sections$ = new BehaviorSubject<Section[]>([]);
  firstSectionTitle$: Observable<string>;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.firstSectionTitle$ = this.sections$.pipe(
      filter(s => s.length > 0),
      map(s => s[0].title)
    );
  }

  /**
   * @ignore
   */
  selectSection(section: Section) {
    if (this.disableRoutedNavigation) {
      this.activeSection$ = of(section);
    } else {
      this.router.navigate(['.'], {
        queryParamsHandling: 'merge',
        queryParams: {
          section: section.title
        },
        relativeTo: this.route,
      });
    }
  }

  /**
   * @ignore
   */
  ngOnChanges() {
    this.activeSection$ = combineLatest(this.route.queryParams.pipe(map(p => p.section)), this.sections$)
      .pipe(map(([sectionParam, sections]) => {
        if (this.disableRoutedNavigation || !sectionParam) {
          return sections[0];
        }
        return sections.find(s => s.title === sectionParam);
      }));
  }

  /**
   * @ignore
   */
  addSection(section: Section) {
    this.sections$.next([
      ...this.sections$.value,
      section
    ]);
  }

  /**
   * @ignore
   */
  removeSection(section: Section) {
    this.sections$.next(this.sections$.value.filter(s => s.template !== section.template));
  }

  /**
   * @ignore
   */
  setTitle(section: Section) {
    this.sections$.next(this.sections$.value.map(s => s.template === section.template ? section : s));
  }
}

@Directive({
  selector: '[docsPageSection]'
})
export class PageSectionDirective implements OnInit, OnDestroy, OnChanges {
  @Input() docsPageSection: string;

  constructor(
    private templateRef: TemplateRef<any>,
    private page: PageComponent
  ) {

  }

  /**
   * @ignore
   */
  ngOnInit() {
    this.page.addSection({
      title: this.docsPageSection,
      template: this.templateRef
    });
  }

  /**
   * @ignore
   */
  ngOnDestroy() {
    this.page.removeSection({
      title: this.docsPageSection,
      template: this.templateRef
    });
  }

  /**
   * @ignore
   */
  ngOnChanges() {
    this.page.setTitle({
      title: this.docsPageSection,
      template: this.templateRef
    });
  }

}
