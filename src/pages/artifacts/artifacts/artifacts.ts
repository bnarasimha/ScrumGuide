import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProductBacklog } from '../../artifacts/product-backlog/product-backlog';
import { SprintBacklog } from '../../artifacts/sprint-backlog/sprint-backlog';
import { Increment } from '../../artifacts/increment/increment';

@Component({
  selector: ' artifacts',
  templateUrl: 'artifacts.html'
})
export class Artifacts {

  artifacts: Array<{title: string, component : any}>

  constructor(private navCtrl : NavController) {
  }

  back(component:any){
    this.navCtrl.pop(component);
  }

  goToProductBacklog() {
    this.navCtrl.push(ProductBacklog);
  }

  goToSprintBacklog() {
    this.navCtrl.push(SprintBacklog);
  }

  goToIncrement() {
    this.navCtrl.push(Increment);
  }
}
