import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'scrum-definition',
  templateUrl: 'scrum-definition.html'
})
export class ScrumDefinition {

  constructor(private navCtrl : NavController) {

  }

  back(component:any){
    this.navCtrl.pop(component);
  }
}
