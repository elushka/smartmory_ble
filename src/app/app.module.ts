import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BLE } from '@ionic-native/ble';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailPage } from '../pages/detail/detail';
import { AuthenticatePage } from '../pages/authenticate/authenticate';
import { LoanPage } from '../pages/loan/loan';
import { ReturnPage } from '../pages/return/return';
import { CompleteloanPage } from '../pages/completeloan/completeloan';
import { ValidatereturnPage } from '../pages/validatereturn/validatereturn';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage,
    AuthenticatePage,
    LoanPage,
    ReturnPage,
    CompleteloanPage,
    ValidatereturnPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailPage,
    AuthenticatePage,
    LoanPage,
    ReturnPage,
    CompleteloanPage,
    ValidatereturnPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BLE
  ]
})
export class AppModule {}
