import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DocumentationService } from 'projects/ng-docs/src/lib/core/documentation.service';
import { DOCUMENTATION_PATH } from 'projects/ng-docs/src/lib/documentation.token';

@Component({
  selector: 'app-profile',
  template: ''
})
export class ProfileComponent {
  /**
   * The profile ID.
   */
  @Input() profileId: string;
  /**
   * The category of the profile.
   */
  @Input() category: number;

  /**
   * Inform when the profile is deleted.
   */
  @Output() deleted = new EventEmitter();

  /**
   * Copies the profile.
   */
  copy() {
    // tslint:disable-next-line:no-empty
  }
}

@Component({
  selector: 'app-component-api-example1',
  templateUrl: './component-api-example1.component.html',
  styleUrls: ['./component-api-example1.component.sass'],
  providers: [
    DocumentationService,
    {
      provide: DOCUMENTATION_PATH,
      useValue: 'assets/internal-documentation/documentation.json'
    }
  ]
})
export class ComponentApiExample1Component {
}
