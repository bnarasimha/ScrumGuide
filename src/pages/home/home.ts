import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScrumGuideHome } from '../scrum-guide-home/scrum-guide-home' 

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class Home {

  constructor(private navCtrl : NavController) {
  }

  goToScrumGuideHome(){
    this.navCtrl.push(ScrumGuideHome);
  }
}
