import { Component } from '@angular/core';
import { User } from 'src/app/Models/user';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent {
  name: string = '';
  gender: string = 'Male';
  age: number = 0;
  constructor(private usersServices: UsersService) {}
  CreateUser() {
    this.usersServices.AddNewUser(this.name, this.gender, this.age);
    this.name = '';
    this.gender = 'Male';
    this.age = 0;
  }
}
