import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: ' scrum-master',
  templateUrl: 'scrum-master.html'
})
export class ScrumMaster {
  constructor(private navCtrl : NavController) {

  }

  back(component:any){
    this.navCtrl.pop(component);
  }
}
