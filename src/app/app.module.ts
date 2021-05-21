import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { ScrumGuide } from './app.component';

import { Home } from '../pages/home/home';

import { Scrum } from '../pages/scrum/scrum/scrum';
import { ScrumGuideHome } from '../pages/scrum-guide-home/scrum-guide-home';
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

// import { DefinitionOfDone } from '../pages/definition-of-done/definition-of-done';
import { EndNote } from '../pages/end-note/end-note';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SocialSharing } from '@ionic-native/social-sharing';

@NgModule({
  declarations: [
    ScrumGuide,
    Home,
    Scrum,
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
    // DefinitionOfDone,
    ScrumTeam,
    EndNote
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(ScrumGuide),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Home,
    Scrum,
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
    // DefinitionOfDone,
    ScrumTeam,
    EndNote
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SocialSharing
  ]
})
export class AppModule {}
