import { Component, OnInit, inject } from '@angular/core';
import { User } from 'src/app/Models/user';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  User: User;
  usersService: UsersService = inject(UsersService);
  ngOnInit(): void {
    this.usersService.OnSelectedUser.subscribe((user: User) => {
      this.User = user;
    });
  }
}
