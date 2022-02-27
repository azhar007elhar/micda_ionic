import { Component, OnInit } from '@angular/core';
import { CallNumber } from 'capacitor-call-number';

@Component({
  selector: 'app-call-number',
  templateUrl: './call-number.component.html',
  styleUrls: ['./call-number.component.scss'],
})
export class CallNumberComponent implements OnInit {

  constructor() { }

  ngOnInit() {}


  
  phoneNumber: any;
  async CallNumber() {
    await CallNumber.call({ number: this.phoneNumber, bypassAppChooser: false });
  }

}
