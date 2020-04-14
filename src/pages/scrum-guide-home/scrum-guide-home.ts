import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScrumDefinition } from '../scrum-definition/scrum-definition';
import { ScrumTheory } from '../scrum-theory/scrum-theory';
import { UsesOfScrum } from '../uses-of-scrum/uses-of-scrum';
import { ScrumGuidePurpose } from '../scrum-guide-purpose/scrum-guide-purpose';
import { ScrumValues } from '../scrum-values/scrum-values';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'scrum-guide-home.html'
})
export class ScrumGuideHome {

  pages: Array<{title: string, component : any}>

  constructor(private navCtrl : NavController) {
    this.pages = [
      { title : 'Purpose of Scrum', component : ScrumGuidePurpose},
      { title : 'Definition of Scrum', component : ScrumDefinition},
      { title : 'Uses of Scrum', component : UsesOfScrum},
      { title : 'Scrum Theory', component : ScrumTheory},
      { title : 'Scrum Values', component : ScrumValues},
    ];
  }

  goToPage(component: any) {
    this.navCtrl.push(component);
  }
}
