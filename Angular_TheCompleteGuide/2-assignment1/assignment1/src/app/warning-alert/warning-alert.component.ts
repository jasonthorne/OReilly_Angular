import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  ////styleUrls: ['./warning-alert.component.css']
  //Inline styles (can have multiple styles in the array):
  styles: [`
  h4{
    color: red;
  }`]
})
export class WarningAlertComponent {

}
