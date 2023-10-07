import { Component } from '@angular/core';
import { RespontCatsI } from '../interface/respontCatsInterface';
import { CatsService } from '../api/cats.service';

@Component({
  selector: 'app-viw-cats',
  templateUrl: './viw-cats.page.html',
  styleUrls: ['./viw-cats.page.scss'],
})
export class ViwCatsPage {
  cats: RespontCatsI[] = [];
  
  constructor(catsService: CatsService) {
    catsService.getCats().subscribe((data:RespontCatsI[]) => {
      this.cats = data;
    });
  }

  errorImagen (e:any){
    e.target.src = './assets/img/default.jpg';
  }
}
