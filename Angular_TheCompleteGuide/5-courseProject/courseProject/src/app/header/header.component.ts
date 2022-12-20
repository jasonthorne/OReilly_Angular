import {Component} from '@angular/core';

//pass js objec to decorator to configure this component:
@Component({
    selector: "app-header", //selector allows us to use this commponent
    templateUrl: "./header.component.html" //points to html file for this component
})


export class HeaderComponent{

}