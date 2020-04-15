import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'daily-scrum',
  templateUrl: 'daily-scrum.html'
})
export class DailyScrum {

  constructor(private navCtrl : NavController) {

  }

  back(component:any){
    this.navCtrl.pop(component);
  }
}
