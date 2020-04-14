import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'scrum-guide-purpose',
  templateUrl: 'scrum-guide-purpose.html'
})
export class ScrumGuidePurpose {
  constructor(private navCtrl : NavController) {

  }

  back(component:any){
    this.navCtrl.pop(component);
  }
}
