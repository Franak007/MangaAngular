import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {MANGAS} from "../mock-manga";
import {Manga} from "../entities";
import {MangaService} from "../manga.service";

@Component({
  selector: 'app-add-manga-form',
  templateUrl: `add-manga-form.component.html`,
  styles: []
})
export class AddMangaFormComponent {

  constructor(private mangaService: MangaService) {}

  onSubmit(form: NgForm){
    console.log(form.value);
    return this.mangaService.addToMangaList(form.value)
  }

}
