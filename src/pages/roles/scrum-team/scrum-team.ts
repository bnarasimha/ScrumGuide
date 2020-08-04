import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProductOwner } from '../../roles/product-owner/product-owner';
import { DevelopmentTeam } from '../../roles/development-team/development-team';
import { ScrumMaster } from '../../roles/scrum-master/scrum-master';

@Component({
  selector: ' scrum-team',
  templateUrl: 'scrum-team.html'
})
export class ScrumTeam {

  roles: Array<{title: string, component : any}>

  constructor(private navCtrl : NavController) {
  }

  back(component:any){
    this.navCtrl.pop(component);
  }

  goToProductOwner() {
    this.navCtrl.push(ProductOwner);
  }

  goToScrumMaster() {
    this.navCtrl.push(ScrumMaster);
  }

  goToDevTeam() {
    this.navCtrl.push(DevelopmentTeam);
  }
}
