import { AdmobService } from './../services/admob.service';
import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { AdMob } = Plugins;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public AdmobService: AdmobService) {
    // AdMob.initialize();
    // this.AdmobService.showBottomBanner();
  }

}
