import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  [x: string]:any;

  constructor(private http:HttpClient) { }
  url="http://localhost:9001/view";
  url1="http://localhost:9001/insert";
  url2="http://localhost:9001/update";
  url3="http://localhost:9001/delete";
  url4="http://localhost:9001/buyer";
  url5="http://localhost:9001/bill";
  url6="http://localhost:9001/exit";
  url7="http://localhost:9001/billing";
  viewrecord1()
  {
    return this.http.get(this.url);
  }
  insertrecord1(data:any)
  {
    return this.http.post(this.url1,data);
  }
  updaterecord(data1:any)
  {
    return this.http.post(this.url2,data1);
  }
  deleterecord(data2:any)
  {
    return this.http.post(this.url3,data2);
  }
  buyingrecord(data3:any)
  {
    return this.http.post(this.url4,data3);
  }
  billrecord1()
  {
    return this.http.get(this.url5);
  }
  exitrecord(data6:any)
  {
    return this.http.post(this.url6,data6);
  }
  billingrecord1()
  {
    return this.http.get(this.url7);
  }
}
