import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'iwerk-angular-ui';
import { CodeLineComponent } from './code-line/code-line.component';
import { CodeSampleModule } from './code-sample/code-sample.module';
import { CodeComponent } from './code/code.component';
import { ComponentApiComponent } from './component-api/component-api.component';
import { ComponentDescriptionComponent } from './component-description/component-description.component';
import {
  AnchorContainerDirective,
  AnchorDirective,
  ComponentDocumentationComponent,
  ComponentExampleDirective
} from './component-documentation/component-documentation.component';
import { ComponentExampleComponent } from './component-example/component-example.component';
import { TabDirective, TabsComponent } from './tabs/tabs.component';
import { HttpClientModule } from '@angular/common/http';
import { CopyButtonComponent } from './copy-button/copy-button.component';
import { BrandHeaderDirective } from './directives/brand-header.directive';
import { PageComponent, PageSectionDirective } from './page/page.component';

@NgModule({
  imports: [
    CodeSampleModule,
    CommonModule,
    TooltipModule,
    HttpClientModule
  ],
  exports: [
    CodeSampleModule,
    ComponentDescriptionComponent,
    ComponentApiComponent,
    ComponentDocumentationComponent,
    ComponentExampleDirective,
    ComponentExampleComponent,
    AnchorContainerDirective,
    AnchorDirective,
    TabsComponent,
    TabDirective,
    CodeComponent,
    CodeLineComponent,
    BrandHeaderDirective,
    PageComponent,
    PageSectionDirective
  ],
  declarations: [
    ComponentDescriptionComponent,
    ComponentApiComponent,
    ComponentDocumentationComponent,
    ComponentExampleDirective,
    ComponentExampleComponent,
    AnchorContainerDirective,
    AnchorDirective,
    TabsComponent,
    TabDirective,
    CodeComponent,
    CodeLineComponent,
    CopyButtonComponent,
    BrandHeaderDirective,
    PageComponent,
    PageSectionDirective
  ]
})
export class CoreModule { }
