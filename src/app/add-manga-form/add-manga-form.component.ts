import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {MANGAS} from "../mock-manga";
import {Manga} from "../entities";

@Component({
  selector: 'app-add-manga-form',
  templateUrl: `add-manga-form.component.html`,
  styles: []
})
export class AddMangaFormComponent {

  onSubmit(form: NgForm){
    console.log(form.value);
    this.addToMangaList(form.value);
  }

  addToMangaList(manga:Manga){
    MANGAS.push(manga);
  }

}
