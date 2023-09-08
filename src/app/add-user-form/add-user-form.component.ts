import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../user.service";
import {IUser} from "../iuser";

@Component({
  selector: 'app-add-user-form',
  templateUrl: `add-user-form.component.html`,
  styles: []
})
export class AddUserFormComponent {

  users:IUser[] = [];

  constructor(private user: UserService) { }
  onSubmit(form: NgForm) {
    console.log(form.value);
    this.user.addUser(form.value);
    this.user.addUser(form.value).subscribe(data =>{
      this.users.push(data);

    });
  }

}
