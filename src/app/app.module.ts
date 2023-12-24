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
import { DeleteUserConfirmComponent } from './Components/admin/Users/delete-user-confirm/delete-user-confirm.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home/home.component';
import { AboutComponent } from './Components/home/about/about.component';
import { ContactsComponent } from './Components/home/contacts/contacts.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SearchComponent } from './Components/search/search.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Contact', component: ContactsComponent },
  {path:"Search",component:SearchComponent},
  { path: 'Admin/Users/:id', component: UsersComponent },
  { path: '**', component: NotFoundPageComponent }, //wildcard route
];
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
    DeleteUserConfirmComponent,
    NotFoundPageComponent,
    FooterComponent,
    SearchComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [SubscriptionService, UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
