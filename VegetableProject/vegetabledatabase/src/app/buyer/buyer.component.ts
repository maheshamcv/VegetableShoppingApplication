import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {

  constructor(private service:ServiceService) { this.buyingrecord1}

  ngOnInit(): void {
  }
buyingrecord1(buyform: { value: any; })
{
  this.service.buyingrecord(buyform.value).subscribe();
}
}
