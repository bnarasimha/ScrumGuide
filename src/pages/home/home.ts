import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScrumGuideHome } from '../scrum-guide-home/scrum-guide-home' 
import { SocialSharing } from '@ionic-native/social-sharing'
import { Storage } from '@ionic/storage';

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class Home {

  public mode;
  public appmodeimage;

  constructor(private navCtrl : NavController, private socialSharing: SocialSharing, public storage: Storage) {
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

  ngOnInit(){
    this.storage.get("mode").then((data) => {
      if(data != undefined && data != ''){
        this.mode = data;
        this.setAppMode();
      }
      else{
        this.mode = "theme-dark";
        this.setAppMode();
      }
    })    
  }

  setAppMode(){
    let body = document.getElementsByTagName('body')[0];

    if(body.classList.contains("theme-light") || body.classList.contains("theme-dark")){
      body.classList.toggle(this.mode);
    }
    else{
      body.classList.add(this.mode);
    }
  }
}
