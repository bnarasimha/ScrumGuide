import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'definition-of-done',
  templateUrl: 'definition-of-done.html'
})
export class DefinitionOfDone {
  constructor(private navCtrl : NavController) {

  }

  back(component:any){
    this.navCtrl.pop(component);
  }
}
