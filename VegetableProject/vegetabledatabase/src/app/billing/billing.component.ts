import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  constructor(private service:ServiceService) {this.billingrecord(); }

  ngOnInit(): void {
  }
  billing!: any;
billingrecord()
{
  this.service.billingrecord1().subscribe(
    (res)=>{this.billing=res});
  
}
}
