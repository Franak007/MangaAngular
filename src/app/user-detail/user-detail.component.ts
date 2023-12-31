import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../iuser";
import {UserService} from "../user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-user-detail',
    templateUrl: `user-detail.component.html`,
    styles: []
})
export class UserDetailComponent {
    @Input() userC: IUser | undefined;

}
