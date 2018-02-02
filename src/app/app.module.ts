import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { CarrosPage } from '../pages/carros/carros';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { DetalhesPage } from '../pages/detalhes/detalhes';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CarroServiceProvider } from '../providers/carro-service/carro-service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    CarrosPage,
    FavoritosPage,
    DetalhesPage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CarrosPage,
    FavoritosPage,
    DetalhesPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CarroServiceProvider
  ]
})
export class AppModule {}
