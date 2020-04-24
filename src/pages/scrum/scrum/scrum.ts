import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ScrumDefinition } from '../scrum-definition/scrum-definition';
import { ScrumGuidePurpose } from '../scrum-guide-purpose/scrum-guide-purpose';
import { ScrumTheory } from '../scrum-theory/scrum-theory';
import { ScrumUses } from '../scrum-uses/scrum-uses';
import { ScrumValues } from '../scrum-values/scrum-values';

@Component({
  selector: 'scrum',
  templateUrl: 'scrum.html'
})
export class Scrum {

  constructor(private navCtrl : NavController) {

  }
  goToScrumDefinition(){
    this.navCtrl.push(ScrumDefinition);
  }

  goToPurposeOfScrum(){
    this.navCtrl.push(ScrumGuidePurpose);
  }

  goToScrumTheory(){
    this.navCtrl.push(ScrumTheory);
  }

  goToUsesOfScrum(){
    this.navCtrl.push(ScrumUses);
  }

  goToScrumValues(){
    this.navCtrl.push(ScrumValues);
  }

  back(component:any){
    this.navCtrl.pop(component);
  }
}
