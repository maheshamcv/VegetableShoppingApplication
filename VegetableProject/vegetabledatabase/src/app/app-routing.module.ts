import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillComponent } from './bill/bill.component';
import { BillingComponent } from './billing/billing.component';
import { BuyerComponent } from './buyer/buyer.component';
import { DeleteComponent } from './delete/delete.component';
import { ExitComponent } from './exit/exit.component';
import { InsertComponent } from './insert/insert.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path:'insert-component', component :InsertComponent},
  { path:'update-component', component :UpdateComponent},
  { path:'delete-component', component :DeleteComponent},
  { path:'view-component', component :ViewComponent},
  { path:'buyer-component', component :BuyerComponent},
  { path:'bill-component', component :BillComponent},
  { path:'exit-component', component :ExitComponent},
  { path:'billing-component', component :BillingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
