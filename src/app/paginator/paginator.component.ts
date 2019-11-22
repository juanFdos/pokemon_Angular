import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html'
})
export class PaginatorComponent implements OnInit, OnChanges {

  @Input() public data: any;
  public pagesList: Array<number>;
  private started: number;
  private ended: number;
  private size = 5;

  constructor() { }

  ngOnInit() { this.pageCalculator(); }

  ngOnChanges() {
    this.pageCalculator();
  }

  private pageCalculator() {
    const totalPages = Number.parseInt(this.data.pages, 10);
    const currentPage = Number.parseInt(this.data.currentPage, 10);
    this.started = Math.min(Math.max(1, currentPage - (this.size - 1)), (totalPages - this.size));
    console.log(this.started);
    this.ended = Math.max(Math.min(totalPages, currentPage + this.size - 1), this.size + 1);
    console.log(this.ended);
    console.log(this.ended - this.started + 1);
    this.pagesList = new Array(this.ended - this.started + 1);
    this.pagesList = this.pagesList.fill(0).map((x, i) => i + this.started);
  }
}
