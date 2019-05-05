import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DocsModule } from 'projects/ng-documentation/src/public-api';
import { AppComponent } from './app.component';
import { CodeLineModule } from './features/code-line/code-line.module';
import { CodeLineComponent } from './features/code-line/code-line/code-line.component';
import { CodeModule } from './features/code/code.module';
import { CodeComponent } from './features/code/code/code.component';
import { ComponentApiModule } from './features/component-api/component-api.module';
import { ComponentApiComponent } from './features/component-api/component-api/component-api.component';
import { ComponentDocumentationModule } from './features/component-documentation/component-documentation.module';
import {
  ComponentDocumentationComponent
} from './features/component-documentation/component-documentation/component-documentation.component';
import { HomeModule } from './features/home/home.module';
import { HomeComponent } from './features/home/home/home.component';
import { PageModule } from './features/page/page.module';
import { PageComponent } from './features/page/page/page.component';
import { TabsModule } from './features/tabs/tabs.module';
import { TabsComponent } from './features/tabs/tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TabsModule,
    CodeModule,
    CodeLineModule,
    HomeModule,
    ComponentApiModule,
    ComponentDocumentationModule,
    DocsModule,
    PageModule,
    DocsModule.configure({
      welcomePage: HomeComponent,
      componentPages: {
        tabs: {
          component: TabsComponent,
          title: 'Tabs'
        },
        code: {
          component: CodeComponent,
          title: 'Code'
        },
        codeLine: {
          component: CodeLineComponent,
          title: 'Code Line'
        },
        componentApi: {
          component: ComponentApiComponent,
          title: 'Component API'
        },
        componentDocumentation: {
          component: ComponentDocumentationComponent,
          title: 'Component Documentation'
        },
        page: {
          component: PageComponent,
          title: 'Page'
        }
      }
    })
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
