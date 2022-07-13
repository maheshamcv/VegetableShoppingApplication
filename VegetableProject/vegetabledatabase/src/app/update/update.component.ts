import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private service:ServiceService) { this.updaterecord1}

  ngOnInit(): void {
  }
  updaterecord1(updateform:{ value: any })
  {
    this.service.updaterecord(updateform.value).subscribe();
  }

}
