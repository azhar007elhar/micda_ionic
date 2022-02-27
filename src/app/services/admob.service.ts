import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

import { AdOptions, AdMobRewardItem, BannerAdPosition } from '@capacitor-community/admob';
const { AdMob } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class AdmobService {

  constructor() { }



  /**
 * Height of AdSize
 */
  private appMargin = 0;
  private bannerPosition: 'top' | 'bottom';


  /**
 * Setting of Ads
 */
  private bannerTopOptions: AdOptions = {
    adId: 'ca-app-pub-3940256099942544/2934735716',
    //  adSize: AdSize.SMART_BANNER,
    //  position: AdPosition.TOP_CENTER,
    margin: 0,
    isTesting: true
    // npa: false,
  };

  private bannerBottomOptions: AdOptions = {
    adId: 'ca-app-pub-3940256099942544/2934735716',
    //  adSize: AdSize.SMART_BANNER,
    //  position: AdPosition.BOTTOM_CENTER,
    margin: 0,
    npa: true,
  };

  private bannerCenterOptions: AdOptions = {
    adId: 'ca-app-pub-3940256099942544/2934735716',
    //  adSize: AdSize.SMART_BANNER,
    //  position: AdPosition.CENTER,
    margin : 0,
    npa: true,
  };

  private rewardOptions: AdOptions = {
    adId: 'ca-app-pub-3940256099942544/5224354917',
  };

  private interstitialOptions: AdOptions = {
    adId: 'ca-app-pub-3940256099942544/1033173712',
  };



  /**
 * ==================== BANNER ====================
 */
  async showTopBanner() {
    this.bannerPosition = 'top';
    const result = await AdMob.showBanner(this.bannerTopOptions)
      .catch(e => console.log(e));
    if (result === undefined) {
      return;
    }
  }

  async showCenterBanner() {
    this.bannerPosition = 'top';
    const result = await AdMob.showBanner(this.bannerCenterOptions)
      .catch(e => console.log(e));
    if (result === undefined) {
      return;
    }
  }

  async showBottomBanner() {
    this.bannerPosition = 'bottom';
    const result = await AdMob.showBanner(this.bannerBottomOptions)
      .catch(e => console.log(e));
    if (result === undefined) {
      return;
    }
  }

  async removeBanner() {
    const result = await AdMob.removeBanner()
      .catch(e => console.log(e));
    if (result === undefined) {
      return;
    }
  }

  async resumeBanner() {
    const result = await AdMob.resumeBanner()
      .catch(e => console.log(e));
    if (result === undefined) {
      return;
    }
  }


  /**
   * ==================== /BANNER ====================
   */


  /**
 * ==================== Interstitial ====================
 */
  async prepareInterstitial() {
    const result = AdMob.prepareInterstitial(this.interstitialOptions)
      .catch(e => console.log(e))
      .finally();
    if (result === undefined) {
      return;
    }
  }


  async showInterstitial() {
    const result = await AdMob.showInterstitial()
      .catch(e => console.log(e));
    if (result === undefined) {
      return;
    }
  }

  /**
   * ==================== /Interstitial ====================
   */


}
