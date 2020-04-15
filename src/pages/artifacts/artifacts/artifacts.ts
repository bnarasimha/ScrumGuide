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

    this.artifacts = [
      { title : 'Poduct Backlog', component : ProductBacklog},
      { title : 'Sprint Backlog', component : SprintBacklog},
      { title : 'Increment', component : Increment}
    ];
  }

  back(component:any){
    this.navCtrl.pop(component);
  }

  goToPage(component: any) {
    this.navCtrl.push(component);
  }
}
