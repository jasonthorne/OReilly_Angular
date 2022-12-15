
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
  canChangeStyles = false;
  

  toggleMsg(){

    //toggle canShowMsg:
    this.canShowMsg === false ? this.canShowMsg = true: this.canShowMsg = false;

    //add date string to dates:
    this.times.push(new Date(Date.now()).toLocaleTimeString());

    //change styles when hit length 5:
    if(this.times.length == 5){
      this.canChangeStyles = true;
    }


    console.log(this.times);

    if(this.canChangeStyles){
      console.log("change styles");
    }


    
  }


  getColour(){
    //return green or red deepending on server status:
    return this.canChangeStyles === false ? 'transparent': 'blue';
  }


}
