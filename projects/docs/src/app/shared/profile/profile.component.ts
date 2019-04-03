import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * Profile component that displays basic information of a profile.
 */
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
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
