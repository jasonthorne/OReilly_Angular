import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcustomerComponent} from './addcustomer/addcustomer.component';
import { CustomerComponent} from './customer/customer.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';


const routes: Routes = [
  {path: 'customer', component: CustomerComponent},
  {path: 'addcustomer', component: AddcustomerComponent},
  {path: 'customerlist', component: CustomerlistComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [CustomerComponent, AddcustomerComponent]
