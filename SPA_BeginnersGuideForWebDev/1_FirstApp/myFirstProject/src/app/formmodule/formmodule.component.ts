import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; //import ng form 

@Component({
  selector: 'app-formmodule',
  templateUrl: './formmodule.component.html',
  styleUrls: ['./formmodule.component.css']
})
export class FormmoduleComponent implements OnInit{

  constructor(){}


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  //---------------
  onSave(form: NgForm){ //create onSave, passing ngForm

    console.log(form) //print form
    alert(form.value.useremail) //pop up alert, showing entered email
  }
  //---------------

  //---------------
  customerName: string = "Jimmy";
  message: string = "What will I say???"

  AddCustomer(){
    this.message="Here be my message!"
  }

  //---------------


}
