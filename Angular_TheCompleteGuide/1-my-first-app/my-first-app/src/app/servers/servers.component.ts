import { Component } from '@angular/core';

@Component({

  //selector: 'app-servers',
  //+++++++++ selector as an attribute isnstead of as an element ++++++++:
  //selector: '[app-servers]',

  //+++++++++ selector as a class instead of as an element: NOTE selecting by id WONT work in angular :P
  selector: '.app-servers',

  //NOTE - Templates HAVE to be presnet here. Either external or internal
  /*templateUrl: './servers.component.html',*/ /* link to external html*/
  /* +++++++++++++++ intrnal html:  +++++++++++++ */
  template: `
    <app-server></app-server>
    <app-server></app-server>`, //NOTE - backtick is what's allowing this line break in htis string :P
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

}
