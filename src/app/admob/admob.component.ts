import { AdmobService } from './../services/admob.service';
import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { AdMob } = Plugins;


@Component({
  selector: 'app-admob',
  templateUrl: './admob.component.html',
  styleUrls: ['./admob.component.scss'],
})
export class AdmobComponent implements OnInit {

  constructor(public AdmobService: AdmobService) {
    AdMob.initialize();
    this.AdmobService.showBottomBanner();
    this.AdmobService.prepareInterstitial();
  }

  ngOnInit() { }



  // admob
  async showCenterBanner() {
    await this.AdmobService.removeBanner();
    this.AdmobService.showCenterBanner();
  }


  async showTopBanner() {
    await this.AdmobService.removeBanner();
    this.AdmobService.showTopBanner()
  }


  async showBottomBanner() {
    await this.AdmobService.removeBanner();
    this.AdmobService.showBottomBanner()
  }


  async prepareInterstitial() {
    await this.AdmobService.prepareInterstitial();
  }


  async showInterstitial() {
    await this.AdmobService.prepareInterstitial();
    this.AdmobService.showInterstitial();
  }


}
