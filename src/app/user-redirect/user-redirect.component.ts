import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {ActivatedRoute} from "@angular/router";
import {IUser} from "../iuser";
import {Observable} from "rxjs";

@Component({
    selector: 'app-user-redirect',
    templateUrl: `user-redirect.component.html`,
    styles: []
})
export class UserRedirectComponent implements OnInit {
    constructor(private userService: UserService, private route: ActivatedRoute) {
    }

    selectedUser: IUser|undefined;

    ngOnInit(): void {
        this.route.params.subscribe(params =>
            this.userService.fetchOne(params['id']).subscribe(data =>
                {
                    this.selectedUser = data;
                    return this.selectedUser;
                }
            )
        )
    }
}
