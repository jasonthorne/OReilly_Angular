import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms' //import typecript forms module for use with ngmodel directive

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ///FormsModule //add forms module to imports 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
