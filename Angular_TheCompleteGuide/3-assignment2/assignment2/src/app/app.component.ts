import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment2';

  userName: string = "";

  canResetUserName: boolean = false;

  resetUserName(){
    this.userName = "";
    this.canResetUserName = false;
  }

  onUpdateCanResetUserName(){
    this.canResetUserName = true;
  }
}
