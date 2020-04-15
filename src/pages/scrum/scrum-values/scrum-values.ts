import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'scrum-values',
  templateUrl: 'scrum-values.html'
})
export class ScrumValues {
  constructor(private navCtrl : NavController) {

  }

  back(component:any){
    this.navCtrl.pop(component);
  }
}
