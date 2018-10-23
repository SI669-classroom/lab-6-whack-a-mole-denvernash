import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../provider/data/data';
import { StatusBar } from '@ionic-native/status-bar';
import { NativeAudio } from '@ionic-native/native-audio';
import { IonicStorageModule } from '@ionic/storage';
import { Routes, RouterModule } from '@angular/router';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

const routes: Routes = [
  { path: 'leaderboardpage', loadChildren: './leaderboard/leaderboard.module#LeaderboardPageModule' },
];

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    DataProvider,
    StatusBar,
    SplashScreen,
    NativeAudio,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
