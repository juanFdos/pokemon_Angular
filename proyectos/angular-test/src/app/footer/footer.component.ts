import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {

  public autor: any = { name: 'arceus!' };
  public iPokeball1 = '../../assets/img/pokeball.png';
  public iPokeball2 = '../../assets/img/pokeball2.png';
  public msgBtn1 = 'haz';
  public msgBtn2 = 'algo';
}
