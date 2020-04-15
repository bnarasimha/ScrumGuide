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
    this.roles = [
      { title : 'Poduct Owner', component : ProductOwner},
      { title : 'Scrum Master', component : ScrumMaster},
      { title : 'Development Team', component : DevelopmentTeam}
    ];
  }

  back(component:any){
    this.navCtrl.pop(component);
  }

  goToPage(component: any) {
    this.navCtrl.push(component);
  }
}
