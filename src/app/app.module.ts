import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { ElementsModule } from './elements/elements.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCTOFGccvaEedz1Jykckni5T-WP7XixS_o",
      authDomain: "project-4800661445983438923.firebaseapp.com",
      databaseURL: "https://project-4800661445983438923.firebaseio.com",
      storageBucket: "project-4800661445983438923.appspot.com",
      messagingSenderId: "821727302762"
    }),
    ElementsModule.initializeApp('123'),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
