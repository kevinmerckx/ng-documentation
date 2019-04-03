import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeComponent } from './code/code.component';
import { SharedModule } from '../../shared/shared.module';
import { CodeExample1Component } from './code-example1/code-example1.component';

@NgModule({
  declarations: [CodeComponent, CodeExample1Component],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CodeModule { }
