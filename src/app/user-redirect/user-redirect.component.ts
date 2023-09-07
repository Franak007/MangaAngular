import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-redirect',
  templateUrl: `user-redirect.component.html`,
  styles: []
})
export class UserRedirectComponent implements OnInit{
  constructor(private userService: UserService, private route: ActivatedRoute) {
  }

  selectedUser: string | undefined;

  ngOnInit(): void {
    this.route.params.subscribe(params => {

      const userId: number = +params['id'];
      this.getUserById(userId);
      console.log(this.selectedUser);
    })

    // this.route.params.subscribe(params =>
    //     this.service.fetchOne(params['id']).subscribe(data => this.user = data)
    // );

  }

  getUserById(id: number){
    this.selectedUser = this.userService.fetchById(id);
  }
}
