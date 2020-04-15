import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SprintPlanning } from '../../events/sprint-planning/sprint-planning';
import { SprintReview } from '../../events/sprint-review/sprint-review';
import { SprintRetrospective } from '../../events/sprint-retrospective/sprint-retrospective';
import { DailyScrum } from '../../events/daily-scrum/daily-scrum';
import { Sprint } from '../../events/sprint/sprint';

@Component({
  selector: 'events',
  templateUrl: 'events.html'
})
export class Events {

  events: Array<{title: string, component : any}>

  constructor(private navCtrl : NavController) {
    this.events = [
      { title : 'Sprint Planning', component : SprintPlanning},
      { title : 'Daily Scrum', component : DailyScrum},
      { title : 'Sprint Review', component : SprintReview},
      { title : 'Sprint Retrospective', component : SprintRetrospective},
      { title : 'Sprint', component : Sprint}
    ];
  }

  back(component:any){
    this.navCtrl.pop(component);
  }

  goToPage(component: any) {
    this.navCtrl.push(component);
  }
}
