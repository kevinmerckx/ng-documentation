import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsModule } from 'projects/ng-documentation/src/public-api';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DocsModule
  ],
  exports: [
    DocsModule
  ]
})
export class SharedModule { }
