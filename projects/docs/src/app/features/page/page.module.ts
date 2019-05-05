import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { SharedModule } from '../../shared/shared.module';
import { PageExample1Component } from './page-example1/page-example1.component';
import { PageExample2Component } from './page-example2/page-example2.component';

@NgModule({
  declarations: [PageComponent, PageExample1Component, PageExample2Component],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PageModule { }
