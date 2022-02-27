import { SmsComponent } from './../sms/sms.component';
import { AdmobComponent } from './../admob/admob.component';
import { BarcodeScannerComponent } from './../barcode-scanner/barcode-scanner.component';
import { CameraPreviewComponent } from './../camera-preview/camera-preview.component';
import { CallNumberComponent } from './../call-number/call-number.component';
import { CalculComponent } from './../calcul/calcul.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage , 
    CalculComponent ,
    CallNumberComponent,
    CameraPreviewComponent,
    BarcodeScannerComponent,
    AdmobComponent,
    SmsComponent
  ]
})
export class HomePageModule {}
