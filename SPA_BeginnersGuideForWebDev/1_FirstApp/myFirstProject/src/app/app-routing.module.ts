import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcustomerComponent} from './addcustomer/addcustomer.component';
import { CustomerComponent} from './customer/customer.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';


const routes: Routes = [
  {path: 'customer', component: CustomerComponent},
  {path: 'addcustomer', component: AddcustomerComponent},
  {path: 'customerlist', component: CustomerlistComponent},
  {path: 'pipes-demo', component: PipesDemoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [CustomerComponent, AddcustomerComponent, PipesDemoComponent]
