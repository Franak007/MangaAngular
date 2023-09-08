import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MangaListComponent } from './manga-list/manga-list.component';
import { MangaDetailsComponent } from './manga-details/manga-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Error404Component } from './error404/error404.component';
import { UserComponent } from './user/user.component';
import {HttpClientModule} from "@angular/common/http";
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserRedirectComponent } from './user-redirect/user-redirect.component';
import { AddMangaFormComponent } from './add-manga-form/add-manga-form.component';
import {FormsModule} from "@angular/forms";
import { AddUserFormComponent } from './add-user-form/add-user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MangaListComponent,
    MangaDetailsComponent,
    NavbarComponent,
    Error404Component,
    UserComponent,
    UserDetailComponent,
    UserRedirectComponent,
    AddMangaFormComponent,
    AddUserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
