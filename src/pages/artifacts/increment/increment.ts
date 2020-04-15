import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'increment',
  templateUrl: 'increment.html'
})
export class Increment {

  constructor(private navCtrl : NavController) {

  }

  back(component:any){
    this.navCtrl.pop(component);
  }
}
