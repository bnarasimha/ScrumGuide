import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Scrum } from '../scrum/scrum/scrum';
import { ScrumTeam } from '../roles/scrum-team/scrum-team';
import { Artifacts } from '../artifacts/artifacts/artifacts';
import { Events } from '../events/events/events';
import { DefinitionOfDone } from '../definition-of-done/definition-of-done';
import { EndNote } from '../end-note/end-note';

import { SocialSharing } from '@ionic-native/social-sharing'

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'scrum-guide-home.html'
})
export class ScrumGuideHome {

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
