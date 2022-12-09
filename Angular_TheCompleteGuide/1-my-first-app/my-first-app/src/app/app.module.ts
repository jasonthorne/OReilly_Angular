import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms' //import typecript forms module for use with ngmodel directive
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component'; //++++++++++++importing our component

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,  // ++++++Adding our component to the declarations, so angular is aware of it!
    ServersComponent 
  ],
  imports: [ //++++++++++Alows us to add modules to our module (i.e bunde them)
    BrowserModule,
    FormsModule //add forms module to imports 
  ],
  providers: [],
  bootstrap: [AppComponent] //+++++tells angular which component(s) it should be aware of at the time the app starts ++++++++++++++
})
export class AppModule { }
