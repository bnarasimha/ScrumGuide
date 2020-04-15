import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'sprint-retrospective',
  templateUrl: 'sprint-retrospective.html'
})
export class SprintRetrospective {

  constructor(private navCtrl : NavController) {

  }

  back(component:any){
    this.navCtrl.pop(component);
  }
}
