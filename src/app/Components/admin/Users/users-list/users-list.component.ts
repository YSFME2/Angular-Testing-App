import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { User } from 'src/app/Models/user';
import { UsersService } from 'src/app/Services/users.service';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent {
  Users: User[];
  userToDelete: User;
  @ViewChild('container', { static: true, read: ViewContainerRef })
  container: ViewContainerRef;

  constructor(private usersService: UsersService) {
    this.Users = usersService.Users;
  }

  RemoveById(user: User) {
    this.userToDelete = user;
  }

  ConfirmRemoveUser(confirmation: boolean) {
    if (confirmation) {
      this.usersService.Remove(this.userToDelete);
    }
    this.userToDelete = null;
  }

  ShowUser(user: User) {
    this.usersService.SelectUser(user);
    this.ShowUserDetails(user);
  }

  ShowUserDetails(user: User) {
    const userDetailsComponent =
      this.container.createComponent(UserDetailsComponent).instance;
    userDetailsComponent.User = user;
    var subscription = userDetailsComponent.Close.subscribe((data) => {
      subscription.unsubscribe();
      this.container.clear();
    });
  }
}
