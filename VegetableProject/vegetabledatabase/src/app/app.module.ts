import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ServiceService } from './service.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import {HttpClientModule} from '@angular/common/http';
import  {FormsModule} from '@angular/forms';
import { InsertComponent } from './insert/insert.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { BuyerComponent } from './buyer/buyer.component';
import { BillComponent } from './bill/bill.component';
import { ExitComponent } from './exit/exit.component';
import { BillingComponent } from './billing/billing.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    InsertComponent,
    UpdateComponent,
    DeleteComponent,
    BuyerComponent,
    BillComponent,
    ExitComponent,
    BillingComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
