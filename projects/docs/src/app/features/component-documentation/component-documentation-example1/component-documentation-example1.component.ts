import { Component } from '@angular/core';
import { DocumentationService } from 'projects/ng-documentation/src/lib/core/documentation.service';
import { DOCUMENTATION_PATH } from 'projects/ng-documentation/src/lib/documentation.token';

@Component({
  selector: 'app-component-documentation-example1',
  templateUrl: './component-documentation-example1.component.html',
  styleUrls: ['./component-documentation-example1.component.sass'],
  providers: [
    DocumentationService,
    {
      provide: DOCUMENTATION_PATH,
      useValue: 'assets/internal-documentation/documentation.json'
    }
  ]
})
export class ComponentDocumentationExample1Component {}
