import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { ScrumGuide } from './app.component';

import { ScrumGuideHome } from '../pages/scrum/scrum-guide-home/scrum-guide-home';
import { ScrumDefinition } from '../pages/scrum/scrum-definition/scrum-definition';
import { ScrumUses } from '../pages/scrum/scrum-uses/scrum-uses';
import { ScrumTheory } from '../pages/scrum/scrum-theory/scrum-theory';
import { ScrumGuidePurpose } from '../pages/scrum/scrum-guide-purpose/scrum-guide-purpose';
import { ScrumValues } from '../pages/scrum/scrum-values/scrum-values';

import { ProductOwner } from '../pages/roles/product-owner/product-owner';
import { DevelopmentTeam } from '../pages/roles/development-team/development-team';
import { ScrumMaster } from '../pages/roles/scrum-master/scrum-master';
import { ScrumTeam } from '../pages/roles/scrum-team/scrum-team';

import { ProductBacklog } from '../pages/artifacts/product-backlog/product-backlog';
import { SprintBacklog } from '../pages/artifacts/sprint-backlog/sprint-backlog';
import { Increment } from '../pages/artifacts/increment/increment';
import { Artifacts } from '../pages/artifacts/artifacts/artifacts';

import { Sprint } from '../pages/events/sprint/sprint';
import { DailyScrum } from '../pages/events/daily-scrum/daily-scrum';
import { SprintPlanning } from '../pages/events/sprint-planning/sprint-planning';
import { SprintRetrospective } from '../pages/events/sprint-retrospective/sprint-retrospective';
import { SprintReview } from '../pages/events/sprint-review/sprint-review';
import { Events } from '../pages/events/events/events';

import { DefinitionOfDone } from '../pages/definition-of-done/definition-of-done';

import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    ScrumGuide,
    ScrumGuideHome,
    ScrumDefinition,
    ScrumUses,
    ScrumTheory,
    ScrumGuidePurpose,
    ScrumValues,
    ProductOwner,
    ScrumMaster,
    DevelopmentTeam,
    ProductBacklog,
    SprintBacklog,
    Increment,
    Artifacts,
    Sprint,
    DailyScrum,
    SprintPlanning,
    SprintReview,
    SprintRetrospective,
    Events,
    DefinitionOfDone,
    ScrumTeam,
    ItemDetailsPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(ScrumGuide),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ScrumGuide,
    ScrumGuideHome,
    ScrumDefinition,
    ScrumUses,
    ScrumTheory,
    ScrumGuidePurpose,
    ScrumValues,
    ProductOwner,
    ScrumMaster,
    DevelopmentTeam,
    ProductBacklog,
    SprintBacklog,
    Increment,
    Artifacts,
    Sprint,
    DailyScrum,
    SprintPlanning,
    SprintReview,
    SprintRetrospective,
    Events,
    DefinitionOfDone,
    ScrumTeam,
    ItemDetailsPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
