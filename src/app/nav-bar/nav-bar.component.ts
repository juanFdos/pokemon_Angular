import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent implements OnInit {

  public title: string;
  public home: string;
  public link: string;
  public search: string;

  constructor() {
    this.title = 'Pokémon';
    this.home = 'vamonos';
    this.link = 'Adios';
    this.search = 'Ir';
  }

  ngOnInit() {
  }

}
