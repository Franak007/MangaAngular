import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {MangaListComponent} from "./manga-list/manga-list.component";
import {MangaDetailsComponent} from "./manga-details/manga-details.component";
import {Error404Component} from "./error404/error404.component";
import {UserComponent} from "./user/user.component";
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {UserRedirectComponent} from "./user-redirect/user-redirect.component";
import {AddMangaFormComponent} from "./add-manga-form/add-manga-form.component";
import {AddUserFormComponent} from "./add-user-form/add-user-form.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'liste', component: MangaListComponent},
  {path: 'liste/:id', component: MangaDetailsComponent},
  {path: 'addManga', component: AddMangaFormComponent},
  {path: 'user', component: UserComponent},
  {path: 'user/:id', component: UserRedirectComponent},
  {path: 'addUser', component: AddUserFormComponent},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
