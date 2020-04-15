import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'sprint-planning',
  templateUrl: 'sprint-planning.html'
})
export class SprintPlanning {

  constructor(private navCtrl : NavController) {

  }

  back(component:any){
    this.navCtrl.pop(component);
  }
}
