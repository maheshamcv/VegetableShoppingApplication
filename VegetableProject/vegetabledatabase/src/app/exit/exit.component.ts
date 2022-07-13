import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.css']
})
export class ExitComponent implements OnInit {

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
  }
exitrecord1(exitform: { value: any; })
{
  this.service.exitrecord(exitform.value).subscribe();
}
}
