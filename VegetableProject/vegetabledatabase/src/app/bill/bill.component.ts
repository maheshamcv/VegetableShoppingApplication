import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  constructor(private service:ServiceService) {this.billrecord(); }

  ngOnInit(): void {
  }
bill!: any;
billrecord()
{
  this.service.billrecord1().subscribe(
    (res)=>{this.bill=res});
  
}
}
