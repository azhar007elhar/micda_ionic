import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barcode-scanner',
  templateUrl: './barcode-scanner.component.html',
  styleUrls: ['./barcode-scanner.component.scss'],
})
export class BarcodeScannerComponent implements OnInit {

  constructor(private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {}



  data: any;

  scan() {
    this.data = null;
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.data = barcodeData;
    }).catch(err => {
      console.log('Error', err);
    });
  }

}
