import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'sprint-backlog',
  templateUrl: 'sprint-backlog.html'
})
export class SprintBacklog {

  constructor(private navCtrl : NavController) {

  }

  back(component:any){
    this.navCtrl.pop(component);
  }
}
