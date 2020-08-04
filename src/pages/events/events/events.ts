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
  }

  back(component:any){
    this.navCtrl.pop(component);
  }

  goToSprintPlanning() {
    this.navCtrl.push(SprintPlanning);
  }

  goToDailyScrum() {
    this.navCtrl.push(DailyScrum);
  }

  goSprintReview() {
    this.navCtrl.push(SprintReview);
  }

  goToSprintRetrospective() {
    this.navCtrl.push(SprintRetrospective);
  }

  goToSprint() {
    this.navCtrl.push(Sprint);
  }
}
