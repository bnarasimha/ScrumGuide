import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'development-team',
  templateUrl: 'development-team.html'
})
export class DevelopmentTeam {
  constructor(private navCtrl : NavController) {

  }

  back(component:any){
    this.navCtrl.pop(component);
  }
}
