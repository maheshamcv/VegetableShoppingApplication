import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private service:ServiceService) { this.deleterecord1}

  ngOnInit(): void {
  }
deleterecord1(deleteform :{ value: any })
{
  this.service.deleterecord(deleteform.value).subscribe();
}
}
