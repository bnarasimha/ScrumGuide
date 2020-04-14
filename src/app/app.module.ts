import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { ScrumGuide } from './app.component';

import { ScrumGuideHome } from '../pages/scrum-guide-home/scrum-guide-home';
import { ScrumDefinition } from '../pages/scrum-definition/scrum-definition';
import { ScrumUses } from '../pages/scrum-uses/scrum-uses';
import { ScrumTheory } from '../pages/scrum-theory/scrum-theory';
import { ScrumGuidePurpose } from '../pages/scrum-guide-purpose/scrum-guide-purpose';
import { ScrumValues } from '../pages/scrum-values/scrum-values';

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
    ItemDetailsPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
