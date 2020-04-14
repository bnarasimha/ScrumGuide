import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'scrum-theory',
  templateUrl: 'scrum-theory.html'
})
export class ScrumTheory {
  constructor(private navCtrl : NavController) {

  }

  back(component:any){
    this.navCtrl.pop(component);
  }
}
