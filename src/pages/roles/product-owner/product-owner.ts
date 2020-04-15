import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'product-owner',
  templateUrl: 'product-owner.html'
})
export class ProductOwner {
  constructor(private navCtrl : NavController) {

  }

  back(component:any){
    this.navCtrl.pop(component);
  }
}
