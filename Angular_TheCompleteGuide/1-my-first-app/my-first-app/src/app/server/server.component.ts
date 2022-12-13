import { Component } from "@angular/core";

//component decorator (other types exist :P), to mark this class as a component.
//needs passed an object with important meta data info: 
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent{

    serverId: number = 10;
    serverStatus: string = "offline";

    constructor(){
        //random number, and if number is > 0.5 set as online, otherwise offline.
        this.serverStatus = Math.random() > 0.5? "online": "offline";
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColour(){
        // return green or red deepending on server status:
        return this.serverStatus === 'online' ? 'green': 'red';
    }

}