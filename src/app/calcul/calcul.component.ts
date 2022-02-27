import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.scss'],
})
export class CalculComponent implements OnInit {

  constructor() { }

  ngOnInit() {}



  nb1: any;
  nb2: any;
  res: any;
  
  calcul() {
    if (this.nb1 > 0 && this.nb2 > 0) {
      this.res = this.nb1 * this.nb2;
    }
  }

  resetCalcul() {
    this.nb1 = '';
    this.nb2 = '';
    this.res = '';
  }

}
