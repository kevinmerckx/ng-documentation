import { Component, Input } from '@angular/core';

@Component({
  selector: 'docs-component-description',
  templateUrl: './component-description.component.html',
  styleUrls: ['./component-description.component.sass'],
})
export class ComponentDescriptionComponent {
  @Input() componentId: string;
  @Input() componentType: 'components' | 'directives';
}
