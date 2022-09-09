import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'powtorzenie4P';
  licznik :number =0;
  urlZdj1:string = "assets/images/zdj1.jpg";
  urlZdj2:string = "assets/images/zdj2.jpg";
  urlZdj3:string = "assets/images/zdj3.jpg";
  kursy:string[] = [
    "Programowanie w JS",
    "Algorytmy",
    "Zarządzanie projektami",
    "Progromowanie SPA w Angular"
  ];
  czyAktywne:boolean = false;
  zwieksz():void{
    this.licznik++;
  }
}
