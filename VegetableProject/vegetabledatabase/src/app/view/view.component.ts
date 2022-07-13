import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private service:ServiceService) { this.viewrecord();}
  veg!: any;
  ngOnInit(): void {
  }
  
  viewrecord()
  {
    this.service.viewrecord1().subscribe(
      (response)=>{this.veg=response});
  }
}
