import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent implements OnInit{

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  myValue: string = "I be a string"

}
