import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {

  ngOnInit(): void {
    this.isHide = false;
    throw new Error('Method not implemented.');
  }

  //---------------------ng for:
  customers = [
    {customerName: 'John', age: 23},
    {customerName: 'Paul', age: 30},
    {customerName: 'George', age: 20},
    {customerName: 'Ringo', age: 19},
  ]
  //---------------------ng if:

  customerName: string = "";
  customerAge: number = 0;
  isChecked: boolean = false;
  isHide: boolean = false;

  checkClick(){
    this.isChecked = true;
    this.isHide = true;
  }

  //----------------------ng switch:

  countries: string = "";
  




}
