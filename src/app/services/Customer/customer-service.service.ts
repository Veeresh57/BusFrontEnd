import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, pipe } from 'rxjs';
import {ICustomer} from '../../models/iCustomer';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  url = 'http://localhost/MyBusApp/api/Customer/';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  constructor(private http:HttpClient) { }

  postCustomer(Customer:ICustomer):Observable<ICustomer>{
    return this.http.post<ICustomer>(this.url + "Register", Customer,this.httpOptions);
  }

  loginCustomer(Customer:ICustomer):Observable<ICustomer>{
    return this.http.post<ICustomer>(this.url + "Login" ,Customer,this.httpOptions)
    .pipe(
 
      map(Customer=>{

          localStorage.setItem("currentuser",JSON.stringify(Customer))
          console.log(Customer) 
          return Customer;
      })

  );
  }

  getCustomer(Password:string):Observable<ICustomer>{
    return this.http.get<ICustomer>(this.url + "GetCustomer/" +Password)

    .pipe(
 
      map(Customer=>{

          localStorage.setItem("currentuser",JSON.stringify(Customer))
          console.log(Customer) 
          return Customer;
      })

  );
  }

  getCust(CustomerId:Number):Observable<ICustomer>{
    return this.http.get<ICustomer>(this.url+ "GetCust/" +CustomerId);
  }
}
