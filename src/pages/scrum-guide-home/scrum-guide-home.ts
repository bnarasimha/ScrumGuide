import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Scrum } from '../scrum/scrum/scrum';
import { ScrumTeam } from '../roles/scrum-team/scrum-team';
import { Artifacts } from '../artifacts/artifacts/artifacts';
import { Events } from '../events/events/events';
import { EndNote } from '../end-note/end-note';

import { SocialSharing } from '@ionic-native/social-sharing'
import { ScrumValues } from '../scrum/scrum-values/scrum-values';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'scrum-guide-home.html'
})
export class ScrumGuideHome {

  public mode;
  public appmodeimage;

  constructor(private navCtrl : NavController, private socialSharing: SocialSharing, public storage: Storage) {
  }

  ngOnInit(){
    this.storage.get("mode").then((data) => {
      if(data != undefined && data != ''){
        this.mode = data;
        this.setModeImageSrc();    
      }
      else{
        this.mode = "theme-dark";
        this.setModeImageSrc();    
      }
    })    
  }

  changeMode(){
    if(this.mode == "theme-light"){
      this.mode = "theme-dark";
    }
    else{
      this.mode = "theme-light";
    }

    this.setAppMode();
    this.setModeImageSrc();
    this.storage.set("mode", this.mode);
  }

  setAppMode(){
    let body = document.getElementsByTagName('body')[0];

    if(body.classList.contains("theme-light")){
      body.classList.remove("theme-light");
    }
    if(body.classList.contains("theme-dark")){
      body.classList.remove("theme-dark");
    }
    body.classList.add(this.mode);
  }

  setModeImageSrc(){
    if(this.mode == "theme-light"){
      this.appmodeimage = "../../assets/imgs/darkmode.png";
    }
    else{
      this.appmodeimage = "../../assets/imgs/lightmode.png";
    }
  }

  shareApp(){
    var options ={
      message: "Check out this app, Scrum Guide: ",
      subject: "Scrum Guide Android App",
      url: "https://play.google.com/store/apps/details?id=scrum.guide"
    }
    this.socialSharing.shareWithOptions(options).then((success) => {});
  }

  goToScrum(){
    this.navCtrl.push(Scrum);
  }

  goToScrumTeam(){
    this.navCtrl.push(ScrumTeam);
  }

  goToArtifacts(){
    this.navCtrl.push(Artifacts);
  }

  goToScrumValues(){
    this.navCtrl.push(ScrumValues);
  }

  goToEndNote(){
    this.navCtrl.push(EndNote);
  }

  goToEvents(){
    this.navCtrl.push(Events);
  }
}
