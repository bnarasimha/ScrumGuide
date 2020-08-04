import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Scrum } from '../scrum/scrum/scrum';
import { ScrumTeam } from '../roles/scrum-team/scrum-team';
import { Artifacts } from '../artifacts/artifacts/artifacts';
import { Events } from '../events/events/events';
import { DefinitionOfDone } from '../definition-of-done/definition-of-done';
import { Slides } from 'ionic-angular';
import { EndNote } from '../end-note/end-note';

import { SocialSharing } from '@ionic-native/social-sharing'


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'scrum-guide-home.html'
})
export class ScrumGuideHome {
  @ViewChild('slides', { read: Slides }) slides: Slides;

  pages: Array<{title: string, component : any}>
  roles: Array<{title: string, component : any}>
  artifacts: Array<{title: string, component : any}>
  events: Array<{title: string, component : any}>
  artifactTransparency: Array<{title:string, component:any}>

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

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


  goToScrum(){
    this.navCtrl.push(Scrum);
  }

  goToScrumTeam(){
    this.navCtrl.push(ScrumTeam);
  }

  goToArtifacts(){
    this.navCtrl.push(Artifacts);
  }

  goToDoD(){
    this.navCtrl.push(DefinitionOfDone);
  }

  goToEndNote(){
    this.navCtrl.push(EndNote);
  }

  goToEvents(){
    this.navCtrl.push(Events);
  }
}
