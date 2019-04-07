import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DocsModule } from 'projects/ng-documentation/src/public-api';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    DocsModule
  ],
  exports: [
    DocsModule,
    ProfileComponent
  ]
})
export class SharedModule { }
