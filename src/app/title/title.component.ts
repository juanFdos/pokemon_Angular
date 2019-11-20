import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
})
export class TitleComponent {
  public title: string;
  public image: string;

  constructor() {
    this.title = 'Pokémon API';
    this.image = '../assets/img/pokemon-logo.png';
  }

}
