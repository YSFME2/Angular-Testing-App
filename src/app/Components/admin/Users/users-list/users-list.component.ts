import { Component } from '@angular/core';
import { User } from 'src/app/Models/user';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent {
  Users: User[];
  constructor(private usersService: UsersService) {
    this.Users = usersService.Users;
  }
  RemoveById(user: User) {
    this.usersService.Remove(user);
  }
  ShowUser(user:User){
    this.usersService.SelectUser(user);
  }
}
