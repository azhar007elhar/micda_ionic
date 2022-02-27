import { SmsComponent } from './sms/sms.component';
import { AdmobComponent } from './admob/admob.component';
import { BarcodeScannerComponent } from './barcode-scanner/barcode-scanner.component';
import { CameraPreviewComponent } from './camera-preview/camera-preview.component';
import { CallNumberComponent } from './call-number/call-number.component';
import { CalculComponent } from './calcul/calcul.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path: 'calcul' , component: CalculComponent},
  {path: 'callNumber' , component: CallNumberComponent},
  {path: 'camera' , component: CameraPreviewComponent},
  {path: 'barcodeScanner' , component: BarcodeScannerComponent},
  {path: 'admob' , component: AdmobComponent},
  {path: 'sms' , component: SmsComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
