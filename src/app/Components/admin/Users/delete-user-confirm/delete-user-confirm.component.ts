import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-delete-user-confirm',
  templateUrl: './delete-user-confirm.component.html',
  styleUrls: ['./delete-user-confirm.component.css']
})
export class DeleteUserConfirmComponent {
@Input() UserToDelete:User;
@Output() ConfirmDelete:EventEmitter<boolean> = new EventEmitter<boolean>();
OnDeleteConfirmed(value:boolean){
  this.ConfirmDelete.emit(value);
}
}
