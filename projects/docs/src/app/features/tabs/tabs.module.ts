import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TabsComponent } from './tabs/tabs.component';
import { TabsExample1Component } from './tabs-example1/tabs-example1.component';

@NgModule({
  declarations: [
    TabsComponent,
    TabsExample1Component
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class TabsModule { }
