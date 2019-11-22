import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html'
})
export class PaginatorComponent implements OnInit {

  @Input() public data: any;
  public pagesList: Array<number>;

  constructor() { }

  ngOnInit() {
    const n = Number.parseInt(this.data.pages, 10);
    this.pagesList = new Array(n);
    this.pagesList = this.pagesList.fill(0).map((x, i) => i + 1);

  }

}
