import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {IUser} from "../iuser";

@Component({
  selector: 'app-user',
  template: `
    <p>
      user works!
    </p>
  `,
  styles: [
  ]
})
export class UserComponent implements OnInit{

  constructor(private service:UserService){}

  users:IUser[] = []
  ngOnInit() {
    console.log('marche');
  }

  getUser(){
    this.service.fetchAll().subscribe( data =>{
      this.users = data;
    })
  }

}
