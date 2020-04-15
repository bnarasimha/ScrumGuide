import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'sprint',
  templateUrl: 'sprint.html'
})
export class Sprint {

  constructor(private navCtrl : NavController) {

  }

  back(component:any){
    this.navCtrl.pop(component);
  }
}
