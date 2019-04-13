import { Directive, OnInit, TemplateRef } from '@angular/core';
import { DocsComponent } from '../../docs/docs.component';

@Directive({
  selector: '[docsBrandHeader]'
})
export class BrandHeaderDirective implements OnInit {

  constructor(
    private docs: DocsComponent,
    private templateRef: TemplateRef<any>
  ) { }

  ngOnInit() {
    this.docs.brandHeaderTemplate = this.templateRef;
  }
}
