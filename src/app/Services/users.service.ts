import { EventEmitter } from '@angular/core';
import { User } from '../Models/user';

export class UsersService {
  users: User[] = [
    new User(0, 'Youssef Shaaban', 'Male', 26),
    new User(1, 'Ahmed Shaaban', 'Male', 35),
    new User(2, 'Wafaa', 'Female', 14),
    new User(3, 'Darsh', 'Male', 16),
  ];

  get Users(): User[] {
    return this.users;
  }

  public AddNewUser(name: string, gender?: string, age?: number) {
    this.users.push(new User(this.GetLastId() + 1, name, gender, age));
  }
  public GetLastId(): number {
    return this.users[this.users.length - 1].Id;
  }

  OnSelectedUser: EventEmitter<User> = new EventEmitter<User>();

  SelectUser(user: User) {
    this.OnSelectedUser.emit(user);
  }

  public Remove(user: number | User) {
    if (typeof user === 'number') {
      user = this.users.find((x) => x.Id == user);
    }
    if (user != null) {
      var index = this.users.indexOf(user);
      this.users.splice(index, 1);
    }
  }
}
