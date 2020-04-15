import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'sprint-review',
  templateUrl: 'sprint-review.html'
})
export class SprintReview {

  constructor(private navCtrl : NavController) {

  }

  back(component:any){
    this.navCtrl.pop(component);
  }
}
