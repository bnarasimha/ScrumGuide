import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'product-backlog',
  templateUrl: 'product-backlog.html'
})
export class ProductBacklog {

  constructor(private navCtrl : NavController) {

  }

  back(component:any){
    this.navCtrl.pop(component);
  }
}
