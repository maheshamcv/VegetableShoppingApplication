import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  constructor(private service:ServiceService) {this.insertrecord }

  ngOnInit(): void {
  }
  insertrecord(insertform: { value: any })
  {
    this.service.insertrecord1(insertform.value).subscribe();
  }
  }


