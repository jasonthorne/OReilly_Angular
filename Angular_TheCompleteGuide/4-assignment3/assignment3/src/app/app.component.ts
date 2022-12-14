import { Time } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment3';

  canShowMsg: boolean = false;
  times: Array<string> = [];
  

  toggleMsg(){

    //toggle canShowMsg:
    this.canShowMsg === false ? this.canShowMsg = true: this.canShowMsg = false;

    //add date string to dates:
    this.times.push(new Date(Date.now()).toLocaleTimeString());

    console.log(this.times);


    
  }



}
