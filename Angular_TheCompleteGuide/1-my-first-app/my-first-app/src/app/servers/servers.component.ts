import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({

  //selector: 'app-servers',
  //+++++++++ selector as an attribute isnstead of as an element ++++++++:
  //selector: '[app-servers]',

  //+++++++++ selector as a class instead of as an element: NOTE selecting by id WONT work in angular :P
  selector: '.app-servers',

  //NOTE - Templates HAVE to be presnet here. Either external or internal
  templateUrl: './servers.component.html', /* link to external html*/
  /* +++++++++++++++ intrnal html:  +++++++++++++ */
 /* template: `
    <app-server></app-server>
    <app-server></app-server>`, //NOTE - backtick is what's allowing this line break in htis string :P
  */
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  allowNewServer: boolean = false;
  serverName: string = "Test Server";
  servers: Array<string> = ['testServer1', 'testServer2'];

  constructor(){
  //set time out, passing anon function wihch allows new server after 2 secs
  setTimeout(() => {
    this.allowNewServer = true;
  } , 2000);
}

  //------------------------

  serverCreationStatus: string = "No server was created!"
  serverCreated: boolean = false;

  //method to be triggered from listener within template:
  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName); //add new server to servers
    this.serverCreationStatus = "server was created. Name is: " + this.serverName;
  }

  //------------------------

  onUpdateServerName(event: Event){ //recieve event of type Event. Passed by event binded input event
    //console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value; //inform typescript that the html element will be n input element
  }

  //------------------------

  

 



}
