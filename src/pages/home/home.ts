import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AdMob } from '@ionic-native/admob';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private admob: AdMob) {
    
  }
  showInterstitials(){
     if (AdMob) this.admob.showInterstitial();
  }
}
