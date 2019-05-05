import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeComponent } from './code/code.component';
import { SharedModule } from '../../shared/shared.module';
import { CodeExample1Component } from './code-example1/code-example1.component';
import { CodeExample2Component } from './code-example2/code-example2.component';

@NgModule({
  declarations: [CodeComponent, CodeExample1Component, CodeExample2Component],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CodeModule { }
