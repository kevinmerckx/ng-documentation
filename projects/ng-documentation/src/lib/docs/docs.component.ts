import { Component, TemplateRef, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'docs-app',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class DocsComponent {
  brandHeaderTemplate: TemplateRef<any>;

  constructor(
    private route: ActivatedRoute
  ) {
  }

  get search$(): Observable<string> {
    return this.route.queryParams.pipe(map(p => p.search || ''));
  }
}
