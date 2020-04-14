import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'scrum-uses',
  templateUrl: 'scrum-uses.html'
})
export class ScrumUses {
  constructor(private navCtrl : NavController) {

  }

  back(component:any){
    this.navCtrl.pop(component);
  }
}
