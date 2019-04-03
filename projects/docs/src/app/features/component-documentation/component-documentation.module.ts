import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ComponentDocumentationComponent } from './component-documentation/component-documentation.component';
import { ComponentDocumentationExample1Component } from './component-documentation-example1/component-documentation-example1.component';

@NgModule({
  declarations: [ComponentDocumentationComponent, ComponentDocumentationExample1Component],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ComponentDocumentationModule { }
