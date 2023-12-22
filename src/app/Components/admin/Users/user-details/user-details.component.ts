import { Component, EventEmitter, OnInit, inject } from '@angular/core';
import { User } from 'src/app/Models/user';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent{
  User: User;
  Close:EventEmitter<any> = new EventEmitter<any>();
  OnClose(){
    this.Close.emit(null);
  }
}
