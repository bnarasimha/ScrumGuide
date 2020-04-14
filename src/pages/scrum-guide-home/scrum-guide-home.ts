import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScrumDefinition } from '../scrum-definition/scrum-definition';
import { ScrumTheory } from '../scrum-theory/scrum-theory';
import { ScrumUses } from '../scrum-uses/scrum-uses';
import { ScrumGuidePurpose } from '../scrum-guide-purpose/scrum-guide-purpose';
import { ScrumValues } from '../scrum-values/scrum-values';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'scrum-guide-home.html'
})
export class ScrumGuideHome {

  pages: Array<{title: string, component : any}>
  roles: Array<{title: string, component : any}>
  artifacts: Array<{title: string, component : any}>
  events: Array<{title: string, component : any}>

  constructor(private navCtrl : NavController) {
    this.pages = [
      { title : 'Purpose of Scrum', component : ScrumGuidePurpose},
      { title : 'Definition of Scrum', component : ScrumDefinition},
      { title : 'Uses of Scrum', component : ScrumUses},
      { title : 'Scrum Theory', component : ScrumTheory},
      { title : 'Scrum Values', component : ScrumValues},
    ];

    this.roles = [
      { title : 'Poduct Owner', component : ScrumGuidePurpose},
      { title : 'Scrum Master', component : ScrumGuidePurpose},
      { title : 'Development Team', component : ScrumGuidePurpose}
    ];

    this.artifacts = [
      { title : 'Poduct Backlog', component : ScrumGuidePurpose},
      { title : 'Sprint Backlog', component : ScrumGuidePurpose},
      { title : 'Increment', component : ScrumGuidePurpose}
    ];

    this.events = [
      { title : 'Sprint Planning', component : ScrumGuidePurpose},
      { title : 'Daily Scrum', component : ScrumGuidePurpose},
      { title : 'Sprint Review', component : ScrumGuidePurpose},
      { title : 'Sprint Retrospective', component : ScrumGuidePurpose},
      { title : 'Sprint', component : ScrumGuidePurpose}
    ];
  }

  goToPage(component: any) {
    this.navCtrl.push(component);
  }
}
