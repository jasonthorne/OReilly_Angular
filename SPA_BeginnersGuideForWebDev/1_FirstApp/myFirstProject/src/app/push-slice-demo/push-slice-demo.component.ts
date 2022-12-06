import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-push-slice-demo',
  templateUrl: './push-slice-demo.component.html',
  styleUrls: ['./push-slice-demo.component.css']
})

export class PushSliceDemoComponent implements OnInit{

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  employees = new Array();
  employeeName: string = "";

  RemoveEmployee(index: number){
    this.employees.splice(index, 1);

  }

  AddEmployee(){
    if(this.employeeName != ""){
        this.employees.push({name: this.employeeName});
        this.employeeName = ""; //empty employee name
    }

  }

}
