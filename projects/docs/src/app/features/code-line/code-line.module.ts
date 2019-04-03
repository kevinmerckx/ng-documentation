import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeLineExample1Component } from './code-line-example1/code-line-example1.component';
import { CodeLineComponent } from './code-line/code-line.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    CodeLineExample1Component,
    CodeLineComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CodeLineModule { }
