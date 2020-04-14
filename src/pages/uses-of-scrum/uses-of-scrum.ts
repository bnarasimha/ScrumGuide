import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'uses-of-scrum',
  templateUrl: 'uses-of-scrum.html'
})
export class UsesOfScrum {
  constructor(private navCtrl : NavController) {

  }

  back(component:any){
    this.navCtrl.pop(component);
  }
}
