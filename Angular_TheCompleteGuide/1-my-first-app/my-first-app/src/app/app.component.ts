import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  //Inline styles (can have multiple styles in the array):
  styles: [`
  h3{
    color: yellow;

  }`]
})


export class AppComponent {
  //name = 'Sup, dawg!';
}
