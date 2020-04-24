import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Scrum } from '../scrum/scrum/scrum';
import { ScrumDefinition } from '../scrum/scrum-definition/scrum-definition';
import { ScrumTheory } from '../scrum/scrum-theory/scrum-theory';
import { ScrumUses } from '../scrum/scrum-uses/scrum-uses';
import { ScrumGuidePurpose } from '../scrum/scrum-guide-purpose/scrum-guide-purpose';
import { ScrumValues } from '../scrum/scrum-values/scrum-values';

import { ProductOwner } from '../roles/product-owner/product-owner';
import { DevelopmentTeam } from '../roles/development-team/development-team';
import { ScrumMaster } from '../roles/scrum-master/scrum-master';
import { ScrumTeam } from '../roles/scrum-team/scrum-team';

import { ProductBacklog } from '../artifacts/product-backlog/product-backlog';
import { SprintBacklog } from '../artifacts/sprint-backlog/sprint-backlog';
import { Increment } from '../artifacts/increment/increment';
import { Artifacts } from '../artifacts/artifacts/artifacts';

import { SprintPlanning } from '../events/sprint-planning/sprint-planning';
import { SprintReview } from '../events/sprint-review/sprint-review';
import { SprintRetrospective } from '../events/sprint-retrospective/sprint-retrospective';
import { DailyScrum } from '../events/daily-scrum/daily-scrum';
import { Sprint } from '../events/sprint/sprint';
import { Events } from '../events/events/events';

import { DefinitionOfDone } from '../definition-of-done/definition-of-done';

import { Slides } from 'ionic-angular';
import { EndNote } from '../end-note/end-note';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'scrum-guide-home.html'
})
export class ScrumGuideHome {
  @ViewChild('slides', { read: Slides }) slides: Slides;

  pages: Array<{title: string, component : any}>
  roles: Array<{title: string, component : any}>
  artifacts: Array<{title: string, component : any}>
  events: Array<{title: string, component : any}>
  artifactTransparency: Array<{title:string, component:any}>

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(private navCtrl : NavController) {
    this.pages = [
      { title : 'Purpose of Scrum', component : ScrumGuidePurpose},
      { title : 'Definition of Scrum', component : ScrumDefinition},
      { title : 'Uses of Scrum', component : ScrumUses},
      { title : 'Scrum Theory', component : ScrumTheory},
      { title : 'Scrum Values', component : ScrumValues},
    ];

    this.roles = [
      { title : 'Poduct Owner', component : ProductOwner},
      { title : 'Scrum Master', component : ScrumMaster},
      { title : 'Development Team', component : DevelopmentTeam}
    ];

    this.artifacts = [
      { title : 'Poduct Backlog', component : ProductBacklog},
      { title : 'Sprint Backlog', component : SprintBacklog},
      { title : 'Increment', component : Increment}
    ];

    this.events = [
      { title : 'Sprint Planning', component : SprintPlanning},
      { title : 'Daily Scrum', component : DailyScrum},
      { title : 'Sprint Review', component : SprintReview},
      { title : 'Sprint Retrospective', component : SprintRetrospective},
      { title : 'Sprint', component : Sprint}
    ];

    this.artifactTransparency = [
      { title : 'Definition of Done', component : DefinitionOfDone}
    ];
  }

  goToPage(component: any) {
    this.navCtrl.push(component);
  }

  goToScrum(){
    this.navCtrl.push(Scrum);
  }

  goToScrumTeam(){
    this.navCtrl.push(ScrumTeam);
  }

  goToArtifacts(){
    this.navCtrl.push(Artifacts);
  }

  goToDoD(){
    this.navCtrl.push(DefinitionOfDone);
  }

  goToEndNote(){
    this.navCtrl.push(EndNote);
  }

  goToEvents(){
    this.navCtrl.push(Events);
  }
}
