import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {IAdmin} from '../../models/iAdmin';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  url = 'http://localhost/MyBusApp/api/Admin/';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  constructor(private http:HttpClient) { }

  AdminLogin(Admin:IAdmin):Observable<IAdmin>{
    return this.http.post<IAdmin>(this.url+ "Login", Admin,this.httpOptions);
  }
}
