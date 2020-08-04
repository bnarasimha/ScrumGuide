import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScrumGuideHome } from '../scrum-guide-home/scrum-guide-home' 
import { SocialSharing } from '@ionic-native/social-sharing'

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class Home {

  constructor(private navCtrl : NavController, private socialSharing: SocialSharing) {
  }

  shareApp(){
    var options ={
      message: "Check out this app, Scrum Guide: ",
      subject: "Scrum Guide Android App",
      url: "https://play.google.com/store/apps/details?id=scrum.guide"
    }
    this.socialSharing.shareWithOptions(options).then((success) => {});
  }

  goToScrumGuideHome(){
    this.navCtrl.push(ScrumGuideHome);
  }
}
