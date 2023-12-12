import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppClassDirective } from './CustomDirectives/appclass.directive';
import { AppStyleDirective } from './CustomDirectives/appstyle.directive';
import { AppIfDirective } from './CustomDirectives/app-if.directive';
import { AppGenDirective } from './CustomDirectives/app-gen.directive';
import { TabsComponent } from './Components/tabs/tabs.component';
import { SubscriptionService } from './Services/subscription.service';
import { UsersComponent } from './Components/admin/Users/users.component';
import { CreateUserComponent } from './Components/admin/Users/create-user/create-user.component';
import { HeaderComponent } from './Components/header/header.component';
import { UsersService } from './Services/users.service';
import { UsersListComponent } from './Components/admin/Users/users-list/users-list.component';
import { FormsModule } from '@angular/forms';
import { UserDetailsComponent } from './Components/admin/Users/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AppClassDirective,
    AppStyleDirective,
    AppIfDirective,
    AppGenDirective,
    TabsComponent,
    UsersComponent,
    CreateUserComponent,
    HeaderComponent,
    UsersListComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SubscriptionService,UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
