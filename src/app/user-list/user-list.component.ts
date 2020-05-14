import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Output() userMessage: EventEmitter<any> = new EventEmitter();
  users: User[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as User
        };
      });
    });
  }

  delete(id: string) {
    this.userService.deleteUsers(id);
  }
  create(user: User){
    this.userService.postUser(user);
  }
  edit(user: User) {
    this.userMessage.emit(user);
  }
}
