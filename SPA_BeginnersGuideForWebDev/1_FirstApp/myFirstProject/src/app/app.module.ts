import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { CustomerComponent } from './customer/customer.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { FormmoduleComponent } from './formmodule/formmodule.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';

import { uxpipe } from './ProjectPipes/demo.pipe';
import { PushSliceDemoComponent } from './push-slice-demo/push-slice-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    //CustomerComponent,
    //AddcustomerComponent
    routingComponents, //this holds customer and addcustomer components
    FormmoduleComponent, 
    CustomerlistComponent, 
    PipesDemoComponent,
    uxpipe,
    PushSliceDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent/*CustomerComponent, StudentComponent*/]
})
export class AppModule { }
