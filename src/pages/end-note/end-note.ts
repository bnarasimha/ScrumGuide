import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'end-note',
  templateUrl: 'end-note.html'
})
export class EndNote {
  constructor(private navCtrl : NavController) {

  }

  back(component:any){
    this.navCtrl.pop(component);
  }
}
