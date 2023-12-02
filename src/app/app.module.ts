import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppClassDirective } from './CustomDirectives/appclass.directive';
import { AppStyleDirective } from './CustomDirectives/appstyle.directive';
import { AppIfDirective } from './CustomDirectives/app-if.directive';
import { AppGenDirective } from './CustomDirectives/app-gen.directive';
import { TabsComponent } from './Components/tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    AppClassDirective,
    AppStyleDirective,
    AppIfDirective,
    AppGenDirective,
    TabsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
