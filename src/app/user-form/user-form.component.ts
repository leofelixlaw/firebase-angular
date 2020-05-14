import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  users: User[];
  id: any;
  @Input() userInput: User[];
  userForm = this.formBuilder.group({
    name: ['', Validators.required],
    age: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required]
  });
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.id) {
      this.userService.postUser(this.userForm.value);
    } else {
      this.userService.updateUser(this.userForm.value, this.id);
    }
    this.userForm.reset();
    this.id = '';
  }

  ngOnChanges() {
    if (this.userInput) {
      this.id = this.userInput['id'];
      delete this.userInput['id'];
      this.userForm.setValue(this.userInput);
    }
  }
}
