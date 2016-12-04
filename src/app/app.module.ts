import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { AppComponent } from './app.component';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {MapComponent} from "./components/map/map.component";



@NgModule({
  declarations: [
    AppComponent ,NavbarComponent,MapComponent
  ],
  imports: [
    BrowserModule,

    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyApihnbY9IJ8Fl4ItJgtANgjQYC9Kh75WA'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
