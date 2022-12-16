
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `.online{
        color: white;
    }`
  ] 
})

export class AppComponent {
  title = 'assignment3';

  canShowMsg: boolean = false;
  times: Array<string> = []; //listen ot if this is at size of 5 +++++++++++
  

  toggleMsg(){

    //toggle canShowMsg:
    //this.canShowMsg === false ? this.canShowMsg = true: this.canShowMsg = false;
    this.canShowMsg = !this.canShowMsg; //++++++++++Much better way of toggling :P

    //add date string to dates:
    this.times.push(new Date(Date.now()).toLocaleTimeString());
    //this.times.push(this.times.length+1);

    console.log(this.times);
    
  }


}
