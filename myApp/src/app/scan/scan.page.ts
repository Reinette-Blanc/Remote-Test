import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {

  data: any;

  constructor(private bScan: BarcodeScanner) { }

  ngOnInit() {
  }

  scan() {
    this.bScan.scan().then((barcodeData) => {
      this.data = barcodeData.text;
    }).catch(err => {console.log('Error', err); });
  }

}
